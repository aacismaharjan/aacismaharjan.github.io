import React, { useEffect } from 'react';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import { Redirect, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import 'aos/dist/aos.css';
import Experience from './pages/Experience';
import Education from './pages/Education';

/**
 * App component that renders the main application content
 */
function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches });
  }, []);

  return (
    <Switch>
      <Redirect exact from="/character-preview" to="/" />
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
          <Contact />
        </div>
      </Route>
    </Switch>
  );
}

export default App;

