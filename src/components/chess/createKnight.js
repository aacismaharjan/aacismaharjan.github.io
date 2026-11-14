import * as THREE from 'three';

// Original profile, modeled in code. Coordinates are shared by the two faces.
export default function createKnight() {
  const group = new THREE.Group();
  const copper = new THREE.MeshStandardMaterial({ color: 0xb96e45, metalness: 0.5, roughness: 0.32 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x342722, metalness: 0.2, roughness: 0.55 });
  const boardDark = new THREE.MeshStandardMaterial({ color: 0x393431, roughness: 0.85 });
  const boardLight = new THREE.MeshStandardMaterial({ color: 0x5c5149, roughness: 0.85 });
  const plinthMaterial = new THREE.MeshStandardMaterial({ color: 0x252321, roughness: 0.7 });

  const baseProfile = [
    [0, 0.02], [0.62, 0.02], [0.68, 0.08], [0.68, 0.16], [0.6, 0.23],
    [0.57, 0.25], [0.56, 0.31], [0.46, 0.35], [0.4, 0.49], [0.35, 0.59],
    [0.42, 0.63], [0.43, 0.7], [0, 0.7],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  group.add(new THREE.Mesh(new THREE.LatheGeometry(baseProfile, 48), copper));

  const profile = new THREE.Shape();
  profile.moveTo(-0.44, 0.67);
  profile.bezierCurveTo(-0.45, 1.04, -0.12, 1.25, -0.1, 1.53);
  profile.lineTo(-0.24, 1.65);
  profile.lineTo(-0.65, 1.53);
  profile.quadraticCurveTo(-0.83, 1.48, -0.94, 1.69);
  profile.lineTo(-0.98, 1.91);
  profile.lineTo(-0.68, 2.05);
  profile.lineTo(-0.44, 2.32);
  profile.lineTo(-0.29, 2.47);
  profile.lineTo(-0.27, 2.88);
  profile.lineTo(-0.05, 2.63);
  profile.lineTo(0.15, 2.82);
  profile.lineTo(0.23, 2.43);
  profile.bezierCurveTo(0.58, 2.16, 0.69, 1.62, 0.55, 1.18);
  profile.quadraticCurveTo(0.43, 0.9, 0.45, 0.67);
  profile.closePath();
  const head = new THREE.ExtrudeGeometry(profile, {
    depth: 0.38, bevelEnabled: true, bevelThickness: 0.07,
    bevelSize: 0.065, bevelSegments: 2, curveSegments: 8, steps: 1,
  });
  head.translate(0, 0, -0.19);
  group.add(new THREE.Mesh(head, copper));

  const mane = new THREE.Shape();
  mane.moveTo(0.19, 2.49);
  mane.lineTo(0.37, 2.4);
  mane.lineTo(0.62, 2.13);
  mane.lineTo(0.54, 2.06);
  mane.lineTo(0.73, 1.85);
  mane.lineTo(0.63, 1.76);
  mane.lineTo(0.76, 1.52);
  mane.lineTo(0.64, 1.44);
  mane.lineTo(0.66, 1.18);
  mane.lineTo(0.5, 1.04);
  mane.lineTo(0.47, 1.5);
  mane.lineTo(0.4, 2.12);
  mane.closePath();
  const maneGeometry = new THREE.ExtrudeGeometry(mane, { depth: 0.27, bevelEnabled: false });
  maneGeometry.translate(0, 0, -0.135);
  group.add(new THREE.Mesh(maneGeometry, dark));

  const eyeGeometry = new THREE.SphereGeometry(0.044, 12, 8);
  const nostrilGeometry = new THREE.SphereGeometry(0.027, 10, 8);
  [-1, 1].forEach((side) => {
    const eye = new THREE.Mesh(eyeGeometry, dark);
    eye.scale.z = 0.45;
    eye.position.set(-0.29, 2.23, side * 0.265);
    group.add(eye);
    const nostril = new THREE.Mesh(nostrilGeometry, dark);
    nostril.scale.z = 0.4;
    nostril.position.set(-0.79, 1.85, side * 0.265);
    group.add(nostril);
  });

  const plinth = new THREE.Mesh(new THREE.BoxGeometry(3, 0.15, 3), plinthMaterial);
  plinth.position.y = -0.135;
  group.add(plinth);
  const tileGeometry = new THREE.BoxGeometry(0.71, 0.025, 0.71);
  for (let x = 0; x < 4; x += 1) {
    for (let z = 0; z < 4; z += 1) {
      const tile = new THREE.Mesh(tileGeometry, (x + z) % 2 ? boardDark : boardLight);
      tile.position.set((x - 1.5) * 0.72, -0.0475, (z - 1.5) * 0.72);
      group.add(tile);
    }
  }
  // Soft contact shadow without shadow maps or a texture download.
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.77, 48), new THREE.MeshBasicMaterial({
    color: 0x080604, transparent: true, opacity: 0.3, depthWrite: false,
  }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.028;
  group.add(shadow);

  return { group, copper, boardDark, boardLight, plinthMaterial };
}
