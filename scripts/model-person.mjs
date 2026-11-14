import * as THREE from 'three';

// An original stylized interpretation of the supplied photograph, not a scan.
export default function createPerson() {
  const person = new THREE.Group();
  person.name = 'Photo-inspired stylized character';
  // The raised wrist and draped jacket sit on the viewer's right in the photo.
  person.scale.x = -1;
  person.userData = { technique: 'Hand-modeled approximation', reconstructedDetails: 'Shoes and unseen back are approximated' };
  const material = (color, roughness = 0.8, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
  const skin = material(0xc68d61);
  const teal = material(0x71b9b9);
  const collar = material(0x5c9c9e);
  const trousers = material(0x283746);
  const shoes = material(0x30343b);
  const sole = material(0x565a60);
  const black = material(0x171a20);
  const bag = material(0x262a30);
  const seam = material(0x41464e);
  const hair = material(0x19191b);
  const lens = material(0x101820, 0.16, 0.35);
  const metal = material(0xa9b6ba, 0.3, 0.65);
  const white = material(0xd4ece8);
  const sphere = new THREE.SphereGeometry(1, 20, 14);
  const box = new THREE.BoxGeometry(1, 1, 1);

  function ellipsoid(name, mat, position, scale, rotation = [0, 0, 0]) {
    const mesh = new THREE.Mesh(sphere, mat);
    mesh.name = name;
    mesh.position.set(...position);
    mesh.scale.set(...scale);
    mesh.rotation.set(...rotation);
    person.add(mesh);
    return mesh;
  }
  function block(name, mat, position, scale, rotation = [0, 0, 0]) {
    const mesh = new THREE.Mesh(box, mat);
    mesh.name = name;
    mesh.position.set(...position);
    mesh.scale.set(...scale);
    mesh.rotation.set(...rotation);
    person.add(mesh);
    return mesh;
  }
  function limb(name, mat, from, to, top, bottom) {
    const a = new THREE.Vector3(...from), b = new THREE.Vector3(...to);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(top, bottom, a.distanceTo(b), 16), mat);
    mesh.name = name;
    mesh.position.copy(a).add(b).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), a.sub(b).normalize());
    person.add(mesh);
  }
  function tube(name, mat, points, radius) {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, radius, 8, false), mat);
    mesh.name = name;
    person.add(mesh);
  }

  [-1, 1].forEach((side) => {
    const x = side * 0.112;
    ellipsoid('Shoe sole', sole, [x, 0.045, 0.048], [0.089, 0.043, 0.17]);
    ellipsoid('Dark shoe', shoes, [x, 0.086, 0.043], [0.083, 0.065, 0.155]);
    limb('Trouser lower leg', trousers, [side * 0.112, 0.5, 0], [x, 0.13, 0], 0.08, 0.068);
    limb('Trouser upper leg', trousers, [side * 0.10, 0.94, 0], [side * 0.112, 0.5, 0], 0.104, 0.08);
    ellipsoid('Trouser knee', trousers, [side * 0.112, 0.5, 0], [0.08, 0.086, 0.075]);
    tube('Trouser seam', seam, [[x + side * 0.068, 0.17, 0], [x + side * 0.073, 0.48, 0], [x + side * 0.08, 0.87, -0.01]], 0.002);
  });
  block('Trouser hips', trousers, [0, 0.93, 0], [0.38, 0.14, 0.23]);
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.242, 0.198, 0.51, 24), teal);
  torso.name = 'Teal long-sleeved top';
  torso.scale.z = 0.59;
  torso.position.y = 1.235;
  person.add(torso);
  ellipsoid('Shirt shoulders', teal, [0, 1.475, 0], [0.239, 0.077, 0.14]);
  limb('Neck', skin, [0, 1.65, 0], [0, 1.5, 0], 0.066, 0.074);
  const neckRing = new THREE.Mesh(new THREE.TorusGeometry(0.073, 0.012, 8, 28), collar);
  neckRing.name = 'Shirt collar';
  neckRing.rotation.x = Math.PI / 2;
  neckRing.position.set(0, 1.54, 0);
  person.add(neckRing);

  // Relaxed right arm and the raised left wrist/jacket pose from the photo.
  ellipsoid('Right sleeve shoulder', teal, [0.235, 1.43, 0], [0.082, 0.103, 0.085]);
  limb('Right upper sleeve', teal, [0.245, 1.43, 0], [0.292, 1.18, 0.018], 0.075, 0.06);
  ellipsoid('Right elbow', teal, [0.292, 1.18, 0.018], [0.061, 0.07, 0.06]);
  limb('Right forearm sleeve', teal, [0.292, 1.18, 0.018], [0.294, 0.99, 0.06], 0.059, 0.043);
  limb('Right cuff', collar, [0.294, 1.012, 0.055], [0.294, 0.98, 0.062], 0.046, 0.046);
  ellipsoid('Right hand', skin, [0.294, 0.933, 0.069], [0.045, 0.068, 0.035]);
  ellipsoid('Right thumb', skin, [0.26, 0.945, 0.085], [0.017, 0.035, 0.018], [0, 0, -0.35]);
  ellipsoid('Left sleeve shoulder', teal, [-0.235, 1.43, 0], [0.082, 0.103, 0.085]);
  limb('Left upper sleeve', teal, [-0.245, 1.43, 0], [-0.315, 1.17, 0.035], 0.075, 0.06);
  ellipsoid('Left elbow', teal, [-0.315, 1.17, 0.035], [0.063, 0.07, 0.061]);
  limb('Left bent forearm sleeve', teal, [-0.315, 1.17, 0.035], [-0.192, 1.205, 0.22], 0.06, 0.045);
  ellipsoid('Left hand', skin, [-0.137, 1.211, 0.25], [0.067, 0.041, 0.037], [0, 0, -0.1]);
  ellipsoid('Left thumb', skin, [-0.125, 1.245, 0.247], [0.035, 0.016, 0.022]);
  block('Watch strap', black, [-0.197, 1.211, 0.223], [0.045, 0.078, 0.06], [0, -0.4, 0]);
  block('Watch case', metal, [-0.197, 1.224, 0.255], [0.05, 0.055, 0.015], [0, -0.3, 0]);
  block('Watch face', lens, [-0.195, 1.224, 0.265], [0.039, 0.043, 0.007], [0, -0.3, 0]);

  // Backpack and its paired straps are modeled, not painted onto the torso.
  ellipsoid('Backpack body', bag, [0, 1.245, -0.225], [0.215, 0.292, 0.112]);
  ellipsoid('Backpack front pocket', black, [0, 1.19, -0.315], [0.16, 0.177, 0.04]);
  [-1, 1].forEach((side) => {
    ellipsoid('Backpack side pocket', black, [side * 0.205, 1.16, -0.21], [0.045, 0.105, 0.065]);
    tube('Backpack shoulder strap', black, [[side * 0.16, 1.48, -0.23], [side * 0.19, 1.548, -0.02], [side * 0.188, 1.4, 0.128], [side * 0.17, 1.2, 0.14], [side * 0.16, 1.03, -0.075]], 0.026);
    block('Strap buckle', seam, [side * 0.176, 1.26, 0.155], [0.047, 0.052, 0.012]);
    block('Buckle inset', black, [side * 0.176, 1.26, 0.163], [0.025, 0.028, 0.006]);
  });
  tube('Backpack handle', black, [[-0.06, 1.5, -0.22], [0, 1.58, -0.22], [0.06, 1.5, -0.22]], 0.014);

  ellipsoid('Jacket draped over left arm', bag, [-0.363, 1.02, 0.091], [0.116, 0.237, 0.105], [0, 0, -0.09]);
  ellipsoid('Jacket hanging sleeve', black, [-0.414, 0.792, 0.11], [0.057, 0.202, 0.052], [0, 0, 0.12]);
  ellipsoid('Jacket hanging body', bag, [-0.34, 0.802, 0.015], [0.099, 0.208, 0.07], [0, 0, -0.06]);
  tube('Jacket fold', seam, [[-0.38, 1.19, 0.17], [-0.335, 1.02, 0.18], [-0.37, 0.82, 0.13], [-0.36, 0.64, 0.05]], 0.004);

  ellipsoid('Head', skin, [0, 1.793, 0], [0.154, 0.19, 0.139]);
  [-1, 1].forEach((side) => {
    ellipsoid('Ear', skin, [side * 0.15, 1.8, 0.001], [0.027, 0.043, 0.025]);
  });
  ellipsoid('Nose bridge', skin, [0, 1.798, 0.137], [0.024, 0.043, 0.024]);
  ellipsoid('Nose tip', skin, [0, 1.771, 0.158], [0.031, 0.022, 0.029]);
  tube('Moustache', hair, [[-0.045, 1.747, 0.13], [-0.021, 1.754, 0.145], [0, 1.751, 0.149], [0.021, 1.754, 0.145], [0.045, 1.747, 0.13]], 0.008);
  tube('Mouth', material(0x8c5944), [[-0.032, 1.724, 0.128], [0, 1.72, 0.139], [0.032, 1.724, 0.128]], 0.003);

  const capGeometry = new THREE.SphereGeometry(1, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.54);
  const cap = new THREE.Mesh(capGeometry, hair);
  cap.name = 'Hair cap';
  cap.position.set(0, 1.872, -0.014);
  cap.scale.set(0.158, 0.145, 0.142);
  cap.rotation.z = -0.08;
  person.add(cap);
  [-0.09, -0.035, 0.025, 0.075].forEach((x, index) => {
    ellipsoid('Swept hair', hair, [x, 1.976 + index * 0.002, 0.028], [0.07, 0.048, 0.114], [-0.12, -0.3, -0.15]);
  });

  const roundedRect = (width, height, radius) => {
    const s = new THREE.Shape(), x = -width / 2, y = -height / 2;
    s.moveTo(x + radius, y); s.lineTo(x + width - radius, y);
    s.quadraticCurveTo(x + width, y, x + width, y + radius);
    s.lineTo(x + width, y + height - radius); s.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    s.lineTo(x + radius, y + height); s.quadraticCurveTo(x, y + height, x, y + height - radius);
    s.lineTo(x, y + radius); s.quadraticCurveTo(x, y, x + radius, y);
    return s;
  };
  const frameGeometry = new THREE.ExtrudeGeometry(roundedRect(0.143, 0.095, 0.018), { depth: 0.018, bevelEnabled: true, bevelSize: 0.003, bevelThickness: 0.003, bevelSegments: 1, curveSegments: 5 });
  const lensGeometry = new THREE.ShapeGeometry(roundedRect(0.12, 0.071, 0.013));
  [-1, 1].forEach((side) => {
    const frame = new THREE.Mesh(frameGeometry, black);
    frame.name = 'Sunglasses frame';
    frame.position.set(side * 0.079, 1.831, 0.126);
    frame.rotation.y = side * 0.1;
    person.add(frame);
    const glass = new THREE.Mesh(lensGeometry, lens);
    glass.name = 'Sunglasses lens';
    glass.position.set(side * 0.079, 1.831, 0.151);
    glass.rotation.y = side * 0.1;
    person.add(glass);
    tube('Sunglasses temple', black, [[side * 0.145, 1.846, 0.13], [side * 0.156, 1.846, 0.07], [side * 0.155, 1.826, -0.015]], 0.007);
  });
  tube('Sunglasses bridge', black, [[-0.025, 1.85, 0.145], [0, 1.856, 0.152], [0.025, 1.85, 0.145]], 0.008);
  const emblem = new THREE.Mesh(new THREE.TorusGeometry(0.013, 0.002, 6, 16), white);
  emblem.name = 'Small shirt emblem';
  emblem.position.set(-0.09, 1.405, 0.133);
  person.add(emblem);
  return person;
}
