const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const projectRoot = path.resolve(__dirname, "..");
const scanRoots = ["src", "test", "scripts"];

function collectJavaScriptFiles(dirPath, output = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      collectJavaScriptFiles(fullPath, output);
    } else if (entry.isFile() && fullPath.endsWith(".js")) {
      output.push(fullPath);
    }
  }
  return output;
}

const files = scanRoots.flatMap((dir) => collectJavaScriptFiles(path.join(projectRoot, dir)));
const failures = [];

for (const file of files) {
  const check = spawnSync(process.execPath, ["--check", file], { stdio: "pipe", encoding: "utf8" });
  if (check.status !== 0) {
    failures.push({ file, output: check.stderr || check.stdout });
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`Syntax issue in ${path.relative(projectRoot, failure.file)}`);
    console.error(failure.output.trim());
  }
  process.exit(1);
}

console.log(`Lint passed for ${files.length} JavaScript files.`);
