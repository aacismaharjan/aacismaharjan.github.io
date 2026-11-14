import React from 'react';
import Section from '../components/Section';
import ResumePDF from '../assets/resume.pdf';
import { FaGithub, FaLinkedinIn, FaTwitter, FaBlogger } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import social from '../constant/social.json';
import ChessKnightPanel from '../components/ChessKnightPanel';

const links = [
  ['LinkedIn', social.linkedin, FaLinkedinIn], ['GitHub', social.github, FaGithub],
  ['Blog', social.blogger, FaBlogger], ['Twitter', social.twitter, FaTwitter],
  ['Fiverr', social.fiverr, SiFiverr],
];

export default function Home() {
  return (
    <Section id="about">
      <div className="hero-story-grid">
        <div className="hero-story">
          <p className="eyebrow hero-kicker">Engineer. Builder. Team lead.</p>
          <h1 className="hero-name">Aashish <span className="text-primary">Maharjan</span></h1>
          <p className="hero-role">Senior Frontend Engineer <span>/</span> Frontend Team Lead</p>
          <p className="hero-location">Kathmandu, Nepal <span aria-hidden="true">&middot;</span> <a href="mailto:aashishmaharjan2001@gmail.com">aashishmaharjan2001@gmail.com</a></p>
          <p className="lead hero-description">I build thoughtful interfaces and the systems behind them. At Varosa, I lead frontend engineering initiatives for Calilio, working across React, TypeScript, authentication, payments and automated testing.</p>
          <p className="hero-description">A BCIS graduate from Apex College, I bring hands-on Java and Spring Boot experience alongside a focus on maintainable frontend architecture and helping developers grow.</p>
          <div className="hero-actions">
            <a className="btn btn-primary py-3 px-4" href="#experience">Explore my experience <span aria-hidden="true">&#8599;</span></a>
            <a className="btn resume-link py-3 px-4" href={ResumePDF} download="Aashish_Maharjan_Resume.pdf">Download CV <span aria-hidden="true">&darr;</span></a>
          </div>
        </div>
        <ChessKnightPanel />
      </div>
      <dl className="hero-stats">
        <div><dt>11</dt><dd>Junior developers mentored</dd></div>
        <div><dt>31.25%</dt><dd>Reduction in frontend build time</dd></div>
        <div><dt>React + TypeScript</dt><dd>My everyday toolkit</dd></div>
      </dl>
      <div className="social-icons">{links.map(([name, href, Icon]) => <a key={name} className="social-icon" href={href} aria-label={name} target="_blank" rel="noopener noreferrer"><Icon /></a>)}</div>
    </Section>
  );
}
