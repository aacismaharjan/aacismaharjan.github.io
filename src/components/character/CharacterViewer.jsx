import React, { useEffect, useRef, useState } from 'react';
import createCharacterScene from './createCharacterScene';

export const modelUrl = `${process.env.PUBLIC_URL || ''}/models/character.glb`;
export const posterUrl = `${process.env.PUBLIC_URL || ''}/images/character-poster.png`;

export default function CharacterViewer() {
  const host = useRef(null), scene = useRef(null);
  const [status, setStatus] = useState('loading');
  const [active, setActive] = useState(false);
  const [coarse, setCoarse] = useState(() => window.matchMedia('(any-pointer: coarse)').matches);
  useEffect(() => {
    let mounted = true;
    const pointer = window.matchMedia('(any-pointer: coarse)');
    const sync = () => { setCoarse(pointer.matches); setActive(false); scene.current?.setTouchActive(false); };
    pointer.addEventListener('change', sync);
    try {
      scene.current = createCharacterScene(host.current, modelUrl,
        () => { if (mounted) setStatus('ready'); },
        () => { if (mounted) setStatus('unavailable'); });
    } catch (error) { setStatus('unavailable'); }
    return () => { mounted = false; pointer.removeEventListener('change', sync); scene.current?.dispose(); scene.current = null; };
  }, []);
  const toggleTouch = () => { scene.current?.setTouchActive(!active); setActive(!active); };
  return <>
    <div className="character-stage">
      {status !== 'ready' && <img src={posterUrl} alt="Still preview of the supplied 3D model" className="character-poster" />}
      <div className="character-canvas" ref={host} hidden={status === 'unavailable'} />
      <span className="character-stage-label">{status === 'ready' ? '360° / Explore the character' : 'Character study / Static illustration'}</span>
    </div>
    <p className="character-hint" role="status">{status === 'loading' ? 'Loading your character…' : status === 'unavailable' ? 'The 3D view is unavailable. You can still download the model below.' : coarse ? (active ? 'Drag to rotate. Tap Done to return to scrolling.' : 'Use the buttons, or activate touch exploration.') : 'Drag to rotate · Scroll over the model to zoom'}</p>
    {status === 'ready' && <div className="character-controls" role="group" aria-label="Character view controls">
      <button type="button" aria-label="Rotate character left" onClick={() => scene.current?.rotate(-1)}>↶</button>
      <button type="button" aria-label="Zoom in" onClick={() => scene.current?.zoom(1)}>+</button>
      <button type="button" className="character-reset" onClick={() => scene.current?.reset()}>Reset view</button>
      <button type="button" aria-label="Zoom out" onClick={() => scene.current?.zoom(-1)}>−</button>
      <button type="button" aria-label="Rotate character right" onClick={() => scene.current?.rotate(1)}>↷</button>
      {coarse && <button type="button" className="character-touch" aria-pressed={active} onClick={toggleTouch}>{active ? 'Done' : 'Explore in 3D'}</button>}
    </div>}
  </>;
}
