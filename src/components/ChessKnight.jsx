import React, { useEffect, useRef, useState } from 'react';
import createKnightScene from './chess/createKnightScene';

const fallbackImage = `${process.env.PUBLIC_URL || ''}/images/chess-knight.svg`;

export default function ChessKnight() {
  const host = useRef(null);
  const scene = useRef(null);
  const [status, setStatus] = useState('loading');
  const [touchActive, setTouchActive] = useState(false);
  const [coarse, setCoarse] = useState(() => window.matchMedia('(any-pointer: coarse)').matches);

  useEffect(() => {
    let mounted = true;
    const pointer = window.matchMedia('(any-pointer: coarse)');
    const syncPointer = () => {
      setCoarse(pointer.matches);
      setTouchActive(false);
      scene.current?.setTouchActive(false);
    };
    pointer.addEventListener('change', syncPointer);
    try {
      scene.current = createKnightScene(host.current, () => {
        if (mounted) setStatus('unavailable');
      });
      setStatus('ready');
    } catch (error) {
      setStatus('unavailable');
    }
    return () => {
      mounted = false;
      pointer.removeEventListener('change', syncPointer);
      scene.current?.dispose();
      scene.current = null;
    };
  }, []);

  function toggleTouch() {
    const active = !touchActive;
    scene.current?.setTouchActive(active);
    setTouchActive(active);
  }

  function handleKeyDown(event) {
    if (status !== 'ready') return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      scene.current?.rotate(event.key === 'ArrowLeft' ? -1 : 1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      scene.current?.reset();
    }
    if (event.key === 'Escape' && touchActive) {
      scene.current?.setTouchActive(false);
      setTouchActive(false);
    }
  }

  return <div className="knight-viewer">
    <div className={'knight-stage ' + (touchActive ? 'knight-touch-active' : '')}
      tabIndex={status === 'ready' ? 0 : undefined} role="group"
      aria-label="3D chess knight" aria-describedby={status === 'ready' ? 'knight-instructions' : undefined}
      onKeyDown={handleKeyDown}>
      {status !== 'ready' && <img className="knight-fallback" src={fallbackImage} alt="Copper chess knight on a checkerboard plinth" />}
      <div className="knight-canvas" ref={host} hidden={status === 'unavailable'} />
    </div>
    {status === 'ready' ? <>
      <p className="sr-only" id="knight-instructions">Drag to rotate. Use left and right arrow keys to rotate, Home to reset.{coarse && ' On touch, activate Explore in 3D first. Tap Done or press Escape to return to scrolling.'}</p>
      {coarse ? <button type="button" className="knight-explore" aria-pressed={touchActive} onClick={toggleTouch}>{touchActive ? 'Done' : 'Explore in 3D'}</button> : <span className="knight-gesture" aria-hidden="true">Drag to rotate</span>}
    </> : status === 'loading' && <span className="knight-loading" role="status">Preparing the board…</span>}
  </div>;
}
