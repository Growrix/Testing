import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

import { buildProfile } from '../lib/build-profile.js';
import { readJsonFile, resolveRootPath } from '../lib/paths.js';

test('buildProfile writes the locked output bundle in mock mode', async () => {
  const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'html-profile-builder-'));

  const result = await buildProfile({
    briefPath: resolveRootPath('tests', 'fixtures', 'sample-agency-normalized.json'),
    outputRoot: tempDirectory,
    useMock: true,
    modelName: 'mock-local-generator',
    apiKey: ''
  });

  const buildResult = readJsonFile(result.buildResultPath);

  assert.equal(fs.existsSync(path.join(result.outputDirectory, 'profile.html')), true);
  assert.equal(fs.existsSync(path.join(result.outputDirectory, 'input-snapshot.json')), true);
  assert.equal(fs.existsSync(path.join(result.outputDirectory, 'prompt-bundle.md')), true);
  assert.equal(fs.existsSync(path.join(result.outputDirectory, 'qa-report.md')), true);
  assert.equal(buildResult.status, 'passed');
  assert.equal(buildResult.delivery_class, 'blocked');
});