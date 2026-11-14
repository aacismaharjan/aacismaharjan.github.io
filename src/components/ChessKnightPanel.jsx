import React, { Component, lazy, Suspense } from 'react';

const ChessKnight = lazy(() => import('./ChessKnight'));
const fallbackImage = `${process.env.PUBLIC_URL || ''}/images/chess-knight.svg`;

export function KnightFallback({ loading = false }) {
  return <div className="knight-viewer">
    <div className="knight-stage knight-static"><img src={fallbackImage} alt="Copper chess knight on a checkerboard plinth" /></div>
    {loading && <span className="knight-loading" role="status">Preparing the board…</span>}
  </div>;
}

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <KnightFallback /> : this.props.children; }
}

export default function ChessKnightPanel() {
  return <figure className="knight-panel" aria-label="Interactive chess knight">
    <div className="knight-heading"><span className="eyebrow">Off the clock. On the board.</span></div>
    <SceneBoundary><Suspense fallback={<KnightFallback loading />}><ChessKnight /></Suspense></SceneBoundary>
    <figcaption className="knight-profile">
      <div className="knight-profile-rating"><strong>1843</strong><span>Rapid<span className="knight-rating-note">Personal best</span></span></div>
      <a className="knight-profile-link" href="https://www.chess.com/member/aacismaharjan" target="_blank" rel="noopener noreferrer" aria-label="View my Chess.com profile">Chess.com <span aria-hidden="true">&#8599;</span></a>
    </figcaption>
  </figure>;
}
