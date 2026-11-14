import React, { Component, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CharacterViewer, { modelUrl, posterUrl } from '../components/character/CharacterViewer';

class ViewerBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <><div className="character-stage"><img className="character-poster" src={posterUrl} alt="Still preview of the supplied 3D model" /></div><p className="character-hint">Preview unavailable. The model is still available to download.</p></> : this.props.children; }
}

export default function CharacterPreview() {
  const [dark, setDark] = useState(() => document.body.classList.contains('theme-dark'));
  useEffect(() => {
    document.body.classList.add('character-preview-mode');
    const observer = new MutationObserver(() => setDark(document.body.classList.contains('theme-dark')));
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => { observer.disconnect(); document.body.classList.remove('character-preview-mode'); };
  }, []);
  return <main className="character-page">
    <Helmet><title>Character study | Aashish Maharjan</title><meta name="robots" content="noindex" /></Helmet>
    <header className="character-header"><Link to="/">← Back to portfolio</Link><span className="eyebrow">Character lab / 01</span><button type="button" onClick={() => window.computeDarkTheme(!dark)}>{dark ? 'Light mode' : 'Dark mode'}</button></header>
    <div className="character-layout">
      <section className="character-copy" aria-labelledby="character-title">
        <p className="eyebrow">Explore every angle.</p>
        <h1 id="character-title">A new<br /><span>perspective.</span></h1>
        <p className="character-lead">Your supplied 3D model, ready to explore.</p>
        <p>Rotate the model, take a closer look at its textures, or reset the view to see the whole character.</p>
        <dl className="character-facts"><div><dt>Source</dt><dd>User-supplied model</dd></div><div><dt>Format</dt><dd>Textured GLB</dd></div><div><dt>Viewing mode</dt><dd>Static pose</dd></div></dl>
        <a className="btn btn-primary character-download" href={modelUrl} download="character.glb">Download 3D model <span aria-hidden="true">↓</span></a>
        <p className="character-note">The file includes a rig and an animation clip. This preview displays its default pose; the download preserves the original model.</p>
      </section>
      <section className="character-display" aria-label="Interactive character preview"><ViewerBoundary><CharacterViewer /></ViewerBoundary><div className="character-display-footer"><span>One model. Many perspectives.</span><span>Built with Three.js</span></div></section>
    </div>
  </main>;
}
