import fs from 'node:fs';
import path from 'node:path';

import { validateNormalizedBrief } from './brief-contract.js';
import { generateMockHtml } from './mock-html.js';
import { requestAnthropicHtml } from './model-client.js';
import { buildPromptBundle, loadPromptFiles, loadTemplateSnippets } from './prompt-bundle.js';
import { ensureDirectory, readJsonFile, resolveInputPath, resolveRootPath, writeJsonFile } from './paths.js';
import { resolveThemeName } from './theme-map.js';
import { validateOutputBundle } from './validate-generated-output.js';

function readTheme(themeName) {
  const themePath = resolveRootPath('themes', `${themeName}.json`);
  return readJsonFile(themePath);
}

async function buildProfile({ briefPath, outputRoot, useMock, modelName, apiKey }) {
  const buildStartedAt = new Date().toISOString();
  const resolvedBriefPath = resolveInputPath(briefPath);
  const brief = validateNormalizedBrief(readJsonFile(resolvedBriefPath));
  const themeName = resolveThemeName(brief.colorVibe);
  const theme = readTheme(themeName);
  const promptFiles = loadPromptFiles(brief.businessType);
  const templateSnippets = loadTemplateSnippets();
  const promptBundle = buildPromptBundle({
    brief,
    theme,
    themeName,
    promptFiles,
    templateSnippets
  });
  const outputDirectory = path.join(outputRoot || resolveRootPath('outputs'), brief.clientId, brief.revision);

  ensureDirectory(outputDirectory);

  const snapshotPath = path.join(outputDirectory, 'input-snapshot.json');
  const promptBundlePath = path.join(outputDirectory, 'prompt-bundle.md');
  const htmlPath = path.join(outputDirectory, 'profile.html');
  const buildResultPath = path.join(outputDirectory, 'build-result.json');
  const qaReportPath = path.join(outputDirectory, 'qa-report.md');

  writeJsonFile(snapshotPath, brief);
  fs.writeFileSync(promptBundlePath, `${promptBundle}\n`, 'utf8');

  let html;
  let usedModel = modelName;

  if (useMock) {
    usedModel = 'mock-local-generator';
    html = generateMockHtml({ brief, theme, themeName });
  } else {
    if (!apiKey) {
      throw new Error('Missing required env var ANTHROPIC_API_KEY. Set it or run with --mock for local structural validation.');
    }

    html = await requestAnthropicHtml({
      apiKey,
      promptBundle,
      systemPrompt: promptFiles.systemPrompt,
      model: modelName
    });
  }

  fs.writeFileSync(htmlPath, `${html.trim()}\n`, 'utf8');

  const buildCompletedAt = new Date().toISOString();
  const { buildResult } = validateOutputBundle({
    briefPath: snapshotPath,
    htmlPath,
    buildResultPath,
    qaReportPath,
    themeName,
    model: usedModel,
    buildStartedAt,
    buildCompletedAt
  });

  return {
    outputDirectory,
    htmlPath,
    buildResultPath,
    qaReportPath,
    buildResult
  };
}

export { buildProfile };