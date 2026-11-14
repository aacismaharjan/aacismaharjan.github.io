import React from 'react';
import Section from '../components/Section';

const groups = [
  ['01', 'Frontend & architecture', 'Interfaces that scale with the product.', ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'Zustand', 'TanStack Query', 'GraphQL', 'HTML / CSS / SCSS', 'Material UI']],
  ['02', 'Quality & collaboration', 'Confidence in every release.', ['Playwright', 'Vitest', 'Jest', 'Git / GitHub', 'Jira', 'Code reviews', 'Technical documentation', 'Claude Code']],
  ['03', 'Integrations & platforms', 'Connecting the pieces of a product.', ['Twilio', 'Stripe', 'Chargebee', 'OAuth / MFA', '3D Secure', 'Apple Pay / Google Pay', 'Chrome Extensions', 'PWA / Service Workers']],
  ['04', 'Backend & deployment', 'A full-stack perspective.', ['Java', 'Spring Boot', 'Node.js', 'Express', 'REST APIs', 'MySQL', 'MongoDB', 'Docker', 'AWS basics', 'Postman']],
];

export default function Skills() {
  return <Section id="skills" title="Skills & toolkit">
    <p className="section-intro">The tools I use to turn complex requirements into dependable, usable products.</p>
    <div className="skills-grid">{groups.map(([number, title, description, skills]) => <article className="skill-group" key={number}>
      <span className="eyebrow">{number} / Toolkit</span><h3>{title}</h3><p>{description}</p>
      <ul className="tech-tags" aria-label={title}>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
    </article>)}</div>
  </Section>;
}
