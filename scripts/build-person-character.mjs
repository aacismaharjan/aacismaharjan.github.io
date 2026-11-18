import fs from 'node:fs';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import createPerson from './model-person.mjs';

// GLTFExporter uses FileReader for its binary buffer, even in Node.
globalThis.FileReader = class {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((result) => { this.result = result; this.onloadend?.(); });
  }
};

const model = createPerson();
const output = new URL('../archive/3d/public/models/person-character.glb', import.meta.url);
fs.mkdirSync(new URL('../archive/3d/public/models/', import.meta.url), { recursive: true });
const glb = await new GLTFExporter().parseAsync(model, { binary: true, onlyVisible: true });
fs.writeFileSync(output, Buffer.from(glb));
let triangles = 0, meshes = 0;
model.traverse((object) => {
  if (!object.isMesh) return;
  meshes += 1;
  triangles += (object.geometry.index?.count || object.geometry.attributes.position.count) / 3;
});
console.log(JSON.stringify({ output: output.pathname, bytes: glb.byteLength, meshes, triangles }));
