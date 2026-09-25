/**
 * Audit: every React hook used in a file must appear in its React import.
 * Catches "X is not defined" ReferenceErrors that static export (ssr:false
 * components) and eslint-config-next (no no-undef) both miss.
 * Usage: node scripts/audit-hooks.js   (exit 1 = problems found)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'web');
const HOOKS = ['useState','useEffect','useRef','useMemo','useCallback','useReducer','useContext','useSyncExternalStore','useLayoutEffect','useId','useTransition','useOptimistic','useFormStatus','useActionState'];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith('.js') || entry.name.endsWith('.jsx')) out.push(p);
  }
  return out;
}

const problems = [];
for (const file of [...walk(path.join(ROOT, 'components')), ...walk(path.join(ROOT, 'app'))]) {
  const src = fs.readFileSync(file, 'utf8');
  const impMatch = src.match(/import\s*\{([^}]+)\}\s*from\s*['"]react['"]/);
  const imported = impMatch ? impMatch[1].replace(/\s+/g, '') : '';
  for (const hook of HOOKS) {
    const uses = (src.match(new RegExp('(?<![\\w.])' + hook + '\\s*\\(', 'g')) || []).length;
    if (uses > 0 && !imported.includes(hook)) {
      problems.push(`${path.relative(ROOT, file)}: ${hook} used ${uses}x but not imported`);
    }
  }
}

if (problems.length) {
  console.error('HOOK AUDIT FAILED:');
  problems.forEach(p => console.error('  ' + p));
  process.exit(1);
}
console.log('HOOK AUDIT: 0 problems across all components & app files');
