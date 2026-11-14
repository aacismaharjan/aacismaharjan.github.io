import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function PortfolioCard({ card: { img, title, desc, demo, source, label, technologies, accent } }) {
  return (
    <Card className={accent ? 'project-featured' : ''}>
      {img ? <img className="project-image" src={img} alt={title + ' preview'} loading="lazy" /> :
        <div className={'project-cover project-cover-' + accent}>
          <span className="eyebrow">{label}</span><span className="project-wordmark">{title}</span>
          <span className="project-cover-caption">{accent === 'sewa' ? 'Everyday services. One platform.' : 'Multiple vendors. One seamless order.'}</span>
        </div>}
      <Card.Body>
        {label && <p className="eyebrow">{label}</p>}
        <Card.Title as="h3" className="title">{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        {technologies && <ul className="tech-tags" aria-label="Project technologies">{technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>}
        {(demo || source) && <div className="btn-grp">
          {demo && <Button href={demo} target="_blank" rel="noopener noreferrer">Live Demo</Button>}
          {source && <Button href={source} target="_blank" rel="noopener noreferrer" variant="secondary">Source Code</Button>}
        </div>}
      </Card.Body>
    </Card>
  );
}
