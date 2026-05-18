import fs from 'node:fs';
import path from 'node:path';

import { validateNormalizedBrief } from './brief-contract.js';
import { generateMockHtml } from './mock-html.js';
import { buildCopilotHandoff, buildPromptBundle, loadPromptFiles, loadTemplateSnippets } from './prompt-bundle.js';
import { ensureDirectory, readJsonFile, resolveInputPath, resolveRootPath, writeJsonFile } from './paths.js';
import { resolveThemeName } from './theme-map.js';
import { validateOutputBundle } from './validate-generated-output.js';

function readTheme(themeName) {
  const themePath = resolveRootPath('themes', `${themeName}.json`);
  return readJsonFile(themePath);
}

async function buildProfile({ briefPath, outputRoot }) {
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
  const copilotHandoffPath = path.join(outputDirectory, 'copilot-handoff.md');
  const htmlPath = path.join(outputDirectory, 'profile.html');
  const buildResultPath = path.join(outputDirectory, 'build-result.json');
  const qaReportPath = path.join(outputDirectory, 'qa-report.md');

  writeJsonFile(snapshotPath, brief);
  fs.writeFileSync(promptBundlePath, `${promptBundle}\n`, 'utf8');

  const html = generateMockHtml({ brief, theme, themeName });
  const usedModel = 'local-template-renderer';

  fs.writeFileSync(htmlPath, `${html.trim()}\n`, 'utf8');
  fs.writeFileSync(
    copilotHandoffPath,
    `${buildCopilotHandoff({
      brief,
      themeName,
      outputHtmlPath: htmlPath,
      outputDirectory
    })}\n`,
    'utf8'
  );

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
    copilotHandoffPath,
    htmlPath,
    buildResultPath,
    qaReportPath,
    buildResult
  };
}

export { buildProfile };