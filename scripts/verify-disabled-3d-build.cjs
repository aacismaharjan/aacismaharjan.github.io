const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const build = path.resolve(__dirname, '../build');
function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filename) : [filename];
  });
}

assert(fs.existsSync(build), 'Run npm run build first.');
const files = walk(build);
const scripts = files.filter((filename) => filename.endsWith('.js'));
assert(scripts.length > 0, 'No production JavaScript found.');
const forbiddenSource = /(?:node_modules\/three\/|(?:^|\/)components\/(?:ChessKnight(?:Panel)?\.jsx|(?:chess|character)\/)|(?:^|\/)pages\/CharacterPreview\.jsx)/;
let modules = 0;
for (const filename of scripts) {
  // Every chunk must be inspected, including deferred chunks.
  const mapPath = `${filename}.map`;
  assert(fs.existsSync(mapPath), `Source map required for ${filename}; build with GENERATE_SOURCEMAP=true.`);
  const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
  assert(Array.isArray(map.sources) && map.sources.length > 0, `No sources in ${mapPath}`);
  for (const source of map.sources) {
    assert(!forbiddenSource.test(source.replace(/\\/g, '/')), `Disabled 3D module bundled: ${source}`);
    modules += 1;
  }
}
const forbiddenAsset = /(?:\.glb$|(?:character-poster\.png|chess-knight\.svg|person-character\.svg|features\.css)$)/i;
for (const filename of files) {
  assert(!forbiddenAsset.test(filename), `Disabled 3D asset copied: ${filename}`);
}
const css = fs.readFileSync(path.join(build, 'main.css'), 'utf8');
assert(!/(?:\.knight-|\.character-|grid-template-columns:\s*minmax\(0,\s*1\.4fr\))/.test(css), 'Disabled 3D styles or empty hero column shipped.');
console.log(`Verified ${scripts.length} JavaScript chunks (${modules} source entries): no 3D modules, models, fallback images or feature CSS in build.`);
