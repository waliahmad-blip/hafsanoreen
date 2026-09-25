const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function findJsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (['node_modules', '.git'].includes(item.name)) continue;
      results = results.concat(findJsFiles(full));
    } else if (item.name.endsWith('.js')) {
      results.push(full);
    }
  }
  return results;
}

const jsFiles = findJsFiles('C:/Haffu/src').concat(findJsFiles('C:/Haffu/scripts'));
console.log(`Verifying syntax of ${jsFiles.length} JavaScript files...`);

let passed = 0;
let failed = 0;

for (const file of jsFiles) {
  try {
    execSync(`node -c "${file}"`, { stdio: 'pipe' });
    passed++;
  } catch (err) {
    console.error(`FAIL: ${file}`);
    console.error(err.stderr.toString());
    failed++;
  }
}

console.log(`===============================================`);
console.log(`Syntax Validation: ${passed} PASSED, ${failed} FAILED`);
console.log(`===============================================`);

if (failed > 0) process.exit(1);
