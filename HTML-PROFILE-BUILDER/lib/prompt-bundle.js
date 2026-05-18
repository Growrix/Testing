import fs from 'node:fs';
import path from 'node:path';

import { resolveRootPath } from './paths.js';

function readTextFile(filePath) {
  return fs.readFileSync(filePath, 'utf8').trim();
}

function loadPromptFiles(businessType) {
  const systemPromptPath = resolveRootPath('prompts', 'system-prompt.md');
  const categoryPromptPath = resolveRootPath('prompts', `${businessType}-prompt.md`);

  return {
    systemPrompt: readTextFile(systemPromptPath),
    categoryPrompt: fs.existsSync(categoryPromptPath) ? readTextFile(categoryPromptPath) : ''
  };
}

function loadTemplateSnippets() {
  const templatesDirectory = resolveRootPath('templates');

  if (!fs.existsSync(templatesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(templatesDirectory)
    .filter((fileName) => fileName.endsWith('.html'))
    .sort()
    .map((fileName) => ({
      fileName,
      content: readTextFile(path.join(templatesDirectory, fileName))
    }));
}

function buildPromptBundle({ brief, theme, themeName, promptFiles, templateSnippets }) {
  const templateSection = templateSnippets.length
    ? templateSnippets
        .map((snippet) => `### ${snippet.fileName}\n${snippet.content}`)
        .join('\n\n')
    : 'No template snippets loaded.';

  return [
    '# System Prompt',
    promptFiles.systemPrompt,
    '# Category Prompt',
    promptFiles.categoryPrompt || 'No category prompt loaded.',
    '# Theme Configuration',
    `Theme name: ${themeName}`,
    JSON.stringify(theme, null, 2),
    '# Template Snippets',
    templateSection,
    '# Client Brief',
    JSON.stringify(brief, null, 2),
    '# Build Instruction',
    'Generate one complete self-contained HTML document. Output only raw HTML beginning with <!DOCTYPE html>. Omit unsupported optional sections instead of inventing content.'
  ].join('\n\n');
}

export { buildPromptBundle, loadPromptFiles, loadTemplateSnippets };