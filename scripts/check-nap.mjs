// Fails the build output check if any stale/inconsistent NAP value slipped into dist/.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const banned = [/989-?0800/, /monctontaxi\.ca/i, /white cab/i, /super cab/i];
const required = ['(506) 797-0087', '165 Main St', 'E1C 1B8', 'info@monctontaxi.com'];
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
let failed = false;
for (const file of walk('dist').filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  for (const re of banned) if (re.test(html)) { console.error(`✗ ${file}: contains ${re}`); failed = true; }
  for (const s of required) if (!html.includes(s)) { console.error(`✗ ${file}: missing "${s}"`); failed = true; }
}
console.log(failed ? 'NAP check failed' : '✓ NAP consistent across all pages');
process.exit(failed ? 1 : 0);
