import React from 'react';
import Section from '../components/Section';
import education from '../constant/education';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <p className="section-intro">A foundation in technology, with a perspective on how businesses work.</p>
      <div className="education-grid">
        {education.map((item) => <article className="education-card" key={item.id}>
          <div className="education-topline">
            <span className="eyebrow">{item.university || 'Higher secondary'}</span>
            {item.start && <span className="education-dates"><time dateTime={item.start}>{item.start}</time> &mdash; <time dateTime={item.end}>{item.end}</time></span>}
          </div>
          <h3>{item.institution}</h3>
          <p className="career-role">{item.qualification}</p>
          <p>{item.specialization}</p>
          <p className="education-grade"><strong>{item.grade}</strong><span>CGPA</span></p>
        </article>)}
      </div>
    </Section>
  );
}
