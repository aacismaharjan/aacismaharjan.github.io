import React, { lazy, Suspense, useEffect } from 'react';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import { Route, Switch } from 'react-router-dom';
import Codepen from './pages/Codepen';
import Contact from './pages/Contact';
import 'aos/dist/aos.css';
import Blogs from './pages/Blogs';
import Experience from './pages/Experience';
import Education from './pages/Education';
const CharacterPreview = lazy(() => import('./pages/CharacterPreview'));

/**
 * App component that renders the main application content
 */
function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches });
  }, []);

  return (
    <Switch>
      <Route exact path="/character-preview">
        <Suspense fallback={<p role="status">Loading character preview…</p>}><CharacterPreview /></Suspense>
      </Route>
      <Route exact path="/">
        <Helmet>
          <meta
            name="description"
            content="Aashish Maharjan — Senior Frontend Engineer and Frontend Team Lead. React, TypeScript, frontend architecture, automated testing and full-stack product development."
          />
          <meta name="author" content="Aashish Maharjan" />
          <title>Aashish Maharjan | Senior Frontend Engineer &amp; Team Lead</title>
        </Helmet>
        <div id="wrapper">
          <Navbar />
          <Home />
          <Experience />
          <Education />
          <Skills />
          <Portfolio />
          <Codepen />
          <Blogs />
          <Contact />
        </div>
      </Route>
    </Switch>
  );
}

export default App;

