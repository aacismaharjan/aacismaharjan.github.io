import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Helmet>
          <meta
            name="description"
            content="Aashish Maharjan - Frontend React Web Developer who loves javascript and modern web technologies."
          />
          <meta name="author" content="Aashish Maharjan" />
          <title>Aashish Maharjan - A Frontend React Web Developer</title>
        </Helmet>
        <div id="wrapper">
          <Navbar />
          <Home />
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
