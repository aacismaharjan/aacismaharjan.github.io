import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function release(root) {
  const geometries = new Set(), materials = new Set(), textures = new Set();
  root.traverse((object) => {
    if (object.geometry) geometries.add(object.geometry);
    if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach((m) => materials.add(m));
  });
  materials.forEach((material) => Object.values(material).forEach((value) => { if (value?.isTexture) textures.add(value); }));
  textures.forEach((texture) => { texture.dispose(); texture.source?.data?.close?.(); });
  geometries.forEach((geometry) => geometry.dispose());
  materials.forEach((material) => material.dispose());
}

export default function createCharacterScene(host, url, onReady, onError) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.01, 100);
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const abort = new AbortController();
  let renderer, controls, resizeObserver, themeObserver, intersectionObserver;
  let disposed = false, visible = true, frame = 0, loaded = false, touchActive = false;
  let homeRadius = 4.5;
  const target = new THREE.Vector3(0, 1, 0);
  const homeDirection = new THREE.Vector3(0.32, 0.12, 1).normalize();

  function requestRender() {
    if (!disposed && loaded && visible && !document.hidden && !frame) frame = requestAnimationFrame(render);
  }
  function render() {
    frame = 0;
    if (disposed || !visible || document.hidden) return;
    try { controls.update(); renderer.render(scene, camera); }
    catch (error) { fail(); }
  }
  function fail() { if (!disposed) { dispose(); onError(); } }
  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const previous = homeRadius;
    homeRadius = 4.5 * Math.max(1, 0.65 / camera.aspect);
    controls.minDistance = homeRadius * 0.65;
    controls.maxDistance = homeRadius * 1.8;
    if (loaded) camera.position.sub(target).multiplyScalar(homeRadius / previous).add(target);
    requestRender();
  }
  function syncVisibility() {
    if (!visible || document.hidden) { cancelAnimationFrame(frame); frame = 0; }
    else requestRender();
  }
  function syncMotion() {
    controls.enableDamping = false;
    controls.update();
    controls.enableDamping = !motion.matches;
    requestRender();
  }
  function touchGate(event) { if (event.pointerType === 'touch' && !touchActive) event.stopImmediatePropagation(); }
  function contextLost(event) { event.preventDefault(); fail(); }
  function dispose() {
    if (disposed) return;
    disposed = true;
    abort.abort();
    cancelAnimationFrame(frame);
    resizeObserver?.disconnect(); themeObserver?.disconnect(); intersectionObserver?.disconnect();
    document.removeEventListener('visibilitychange', syncVisibility);
    motion.removeEventListener('change', syncMotion);
    controls?.dispose();
    renderer?.domElement.removeEventListener('pointerdown', touchGate, true);
    renderer?.domElement.removeEventListener('webglcontextlost', contextLost);
    renderer?.domElement.remove();
    release(scene);
    renderer?.dispose();
  }

  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.domElement.setAttribute('role', 'img');
    renderer.domElement.setAttribute('aria-label', 'Interactive preview of the supplied 3D model');
    renderer.domElement.addEventListener('pointerdown', touchGate, true);
    renderer.domElement.addEventListener('webglcontextlost', contextLost);
    host.appendChild(renderer.domElement);
    camera.position.copy(target).addScaledVector(homeDirection, homeRadius);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(target);
    controls.enablePan = false;
    controls.enableDamping = !motion.matches;
    controls.dampingFactor = 0.15;
    controls.minPolarAngle = Math.PI * 0.15;
    controls.maxPolarAngle = Math.PI * 0.53;
    controls.rotateSpeed = 0.65;
    controls.zoomSpeed = 0.7;
    renderer.domElement.style.touchAction = 'pan-y';
    controls.update();
    controls.addEventListener('change', requestRender);
    const ambient = new THREE.HemisphereLight(0xeef5ff, 0x706257, 3);
    const key = new THREE.DirectionalLight(0xffe5d0, 4);
    key.position.set(-3, 5, 4);
    const rim = new THREE.DirectionalLight(0xb9eeeb, 2.5);
    rim.position.set(3, 3, -4);
    scene.add(ambient, key, rim);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xc5bbb1, roughness: 1 });
    const floor = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.7, 0.035, 64), floorMaterial);
    floor.position.y = -0.03;
    scene.add(floor);
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.48, 48), new THREE.MeshBasicMaterial({ color: 0x171b1e, transparent: true, opacity: 0.13, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -0.01;
    scene.add(shadow);
    const syncTheme = () => {
      const dark = document.body.classList.contains('theme-dark');
      floorMaterial.color.setHex(dark ? 0x323a3a : 0xd4cabe);
      ambient.intensity = dark ? 2.5 : 3;
      requestRender();
    };
    themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    syncTheme();
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    intersectionObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncVisibility(); });
    intersectionObserver.observe(host);
    document.addEventListener('visibilitychange', syncVisibility);
    motion.addEventListener('change', syncMotion);
    resize();

    // Only a self-contained GLB is accepted; loading never sends the photo anywhere.
    const manager = new THREE.LoadingManager();
    manager.setURLModifier((resource) => {
      if (resource.startsWith('blob:') || resource.startsWith('data:')) return resource;
      throw new Error('Use a self-contained GLB');
    });
    fetch(url, { signal: abort.signal }).then((response) => {
      if (!response.ok) throw new Error('Model unavailable');
      return response.arrayBuffer();
    }).then((buffer) => {
      if (disposed) return null;
      if (buffer.byteLength < 12 || new DataView(buffer).getUint32(0, true) !== 0x46546c67) throw new Error('Invalid GLB');
      return new GLTFLoader(manager).parseAsync(buffer, '');
    }).then((gltf) => {
      if (!gltf) return;
      if (disposed) { release(gltf.scene); return; }
      const model = gltf.scene;
      // Add before validation so every failure path also releases loaded assets.
      scene.add(model);
      const bounds = new THREE.Box3().setFromObject(model);
      const size = bounds.getSize(new THREE.Vector3());
      if (!Number.isFinite(size.y) || size.y <= 0) throw new Error('Empty model');
      const center = bounds.getCenter(new THREE.Vector3());
      const scale = 2 / size.y;
      model.scale.multiplyScalar(scale);
      model.position.set(-center.x * scale, -bounds.min.y * scale, -center.z * scale);
      loaded = true;
      camera.position.copy(target).addScaledVector(homeDirection, homeRadius);
      controls.update();
      renderer.render(scene, camera);
      onReady();
      requestRender();
    }).catch((error) => { if (!disposed && error.name !== 'AbortError') fail(); });
  } catch (error) { dispose(); throw error; }

  function changeView(transform) {
    if (disposed || !loaded) return;
    controls.enableDamping = false;
    controls.update();
    transform();
    controls.update();
    controls.enableDamping = !motion.matches;
    requestRender();
  }
  return {
    rotate(direction) { changeView(() => {
      const view = new THREE.Spherical().setFromVector3(camera.position.clone().sub(target));
      view.theta += direction * Math.PI / 6;
      camera.position.copy(target).add(new THREE.Vector3().setFromSpherical(view));
    }); },
    zoom(direction) { changeView(() => {
      const offset = camera.position.clone().sub(target);
      const distance = THREE.MathUtils.clamp(offset.length() * (direction > 0 ? 0.85 : 1.18), controls.minDistance, controls.maxDistance);
      camera.position.copy(target).add(offset.setLength(distance));
    }); },
    reset() { changeView(() => camera.position.copy(target).addScaledVector(homeDirection, homeRadius)); },
    setTouchActive(active) { if (!disposed) { touchActive = active; renderer.domElement.style.touchAction = active ? 'none' : 'pan-y'; } },
    dispose,
  };
}
