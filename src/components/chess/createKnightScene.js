import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import createKnight from './createKnight';

export default function createKnightScene(host, onFailure) {
  let renderer;
  let controls;
  let resizeObserver;
  let visibilityObserver;
  let themeObserver;
  let disposed = false;
  let visible = true;
  let touchActive = false;
  let frame = 0;
  let transition = null;
  const scene = new THREE.Scene();
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 40);
  const target = new THREE.Vector3(0, 1.2, 0);
  const homePosition = new THREE.Vector3(3.3, 2.8, 6);
  const home = new THREE.Spherical().setFromVector3(homePosition.clone().sub(target));

  function invalidate() {
    if (!disposed && visible && !document.hidden && !frame) frame = requestAnimationFrame(render);
  }

  function render(now) {
    frame = 0;
    if (disposed || !visible || document.hidden) return;
    if (transition) {
      const progress = Math.min(1, (now - transition.start) / 350);
      const ease = 1 - (1 - progress) ** 3;
      const view = new THREE.Spherical(home.radius,
        THREE.MathUtils.lerp(transition.from.phi, transition.to.phi, ease),
        THREE.MathUtils.lerp(transition.from.theta, transition.to.theta, ease));
      camera.position.copy(target).add(new THREE.Vector3().setFromSpherical(view));
      if (progress === 1) {
        transition = null;
        controls.enableDamping = !motion.matches;
      } else invalidate();
    }
    try {
      controls.update();
      renderer.render(scene, camera);
    } catch (error) {
      dispose();
      onFailure();
    }
  }

  function moveTo(destination) {
    if (disposed) return;
    transition = null;
    // Flush any drag inertia before a button takes over the same camera.
    controls.enableDamping = false;
    controls.update();
    if (motion.matches) {
      camera.position.copy(target).add(new THREE.Vector3().setFromSpherical(destination));
      controls.update();
    } else {
      const from = new THREE.Spherical().setFromVector3(camera.position.clone().sub(target));
      const to = destination.clone();
      to.theta = from.theta + Math.atan2(Math.sin(to.theta - from.theta), Math.cos(to.theta - from.theta));
      transition = { from, to, start: performance.now() };
    }
    invalidate();
  }

  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (width <= 0 || height <= 0) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    invalidate();
  }

  function syncVisibility() {
    if (!visible || document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else invalidate();
  }

  function syncMotion() {
    if (motion.matches && transition) {
      camera.position.copy(target).add(new THREE.Vector3().setFromSpherical(transition.to));
      transition = null;
    }
    controls.enableDamping = !motion.matches;
    invalidate();
  }

  function blockUnactivatedTouch(event) {
    if (event.pointerType === 'touch' && !touchActive) event.stopImmediatePropagation();
  }

  function contextLost(event) {
    event.preventDefault();
    dispose();
    onFailure();
  }

  function stopTransition() {
    transition = null;
    controls.enableDamping = !motion.matches;
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frame);
    resizeObserver?.disconnect();
    visibilityObserver?.disconnect();
    themeObserver?.disconnect();
    document.removeEventListener('visibilitychange', syncVisibility);
    motion.removeEventListener('change', syncMotion);
    if (controls) {
      controls.removeEventListener('change', invalidate);
      controls.removeEventListener('start', stopTransition);
      controls.dispose();
    }
    if (renderer) {
      renderer.domElement.removeEventListener('pointerdown', blockUnactivatedTouch, true);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      renderer.domElement.remove();
    }
    const geometries = new Set();
    const materials = new Set();
    scene.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material) {
        (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => materials.add(material));
      }
    });
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    renderer?.dispose();
  }

  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    const canvas = renderer.domElement;
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'Interactive copper chess knight on a checkerboard plinth');
    canvas.addEventListener('pointerdown', blockUnactivatedTouch, true);
    canvas.addEventListener('webglcontextlost', contextLost);
    host.appendChild(canvas);
    camera.position.copy(homePosition);
    controls = new OrbitControls(camera, canvas);
    controls.target.copy(target);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = !motion.matches;
    controls.dampingFactor = 0.12;
    controls.minPolarAngle = Math.PI * 0.29;
    controls.maxPolarAngle = Math.PI * 0.49;
    controls.rotateSpeed = 0.65;
    canvas.style.touchAction = 'pan-y';
    controls.update();
    controls.addEventListener('change', invalidate);
    controls.addEventListener('start', stopTransition);

    const knight = createKnight();
    scene.add(knight.group);
    const ambient = new THREE.HemisphereLight(0xffead5, 0x343840, 2.5);
    const key = new THREE.DirectionalLight(0xffe6cd, 4.5);
    key.position.set(-3, 6, 5);
    const rim = new THREE.DirectionalLight(0xffb277, 3);
    rim.position.set(3, 4, -3);
    const fill = new THREE.DirectionalLight(0xd9e5ff, 1.5);
    fill.position.set(3, 2, 4);
    scene.add(ambient, key, rim, fill);
    const syncTheme = () => {
      const dark = document.body.classList.contains('theme-dark');
      knight.copper.color.setHex(dark ? 0xd58a57 : 0xb96e45);
      knight.boardDark.color.setHex(dark ? 0x302e2b : 0x393431);
      knight.boardLight.color.setHex(dark ? 0x51473e : 0x6c6055);
      ambient.intensity = dark ? 2 : 2.5;
      invalidate();
    };
    themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    syncTheme();
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncVisibility(); });
    visibilityObserver.observe(host);
    document.addEventListener('visibilitychange', syncVisibility);
    motion.addEventListener('change', syncMotion);
    resize();
    // Fail synchronously if this browser cannot draw the scene.
    renderer.render(scene, camera);
  } catch (error) {
    dispose();
    throw error;
  }

  return {
    rotate(direction) {
      const current = new THREE.Spherical().setFromVector3(camera.position.clone().sub(target));
      current.theta += direction * Math.PI / 6;
      moveTo(current);
    },
    reset() { moveTo(home); },
    setTouchActive(active) {
      touchActive = active;
      renderer.domElement.style.touchAction = active ? 'none' : 'pan-y';
      if (!active) stopTransition();
    },
    dispose,
  };
}
