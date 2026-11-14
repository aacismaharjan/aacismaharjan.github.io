import React from 'react';
import Section from '../components/Section';
import experience from '../constant/experience';

const formatMonth = (value) => {
  const [year, month] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1)));
};

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <p className="section-intro">From business dashboards to real-time communications. Building products, improving systems and helping teams grow.</p>
      <ol className="career-timeline">
        {experience.map((job) => (
          <li key={job.id} className={'career-entry ' + (job.end ? '' : 'career-entry-current')}>
            <div className="career-period">
              {!job.end && <span className="current-badge">Current role</span>}
              <span><time dateTime={job.start}>{formatMonth(job.start)}</time> &mdash; {job.end ? <time dateTime={job.end}>{formatMonth(job.end)}</time> : 'Present'}</span>
              <span className="career-location">{job.location}</span>
            </div>
            <article className="career-card" aria-labelledby={job.id + '-title'}>
              <p className="eyebrow">{job.focus}</p>
              <h3 id={job.id + '-title'}>{job.company}</h3>
              <p className="career-role">{job.role}</p>
              <ul className="achievement-list">{job.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              <ul className="tech-tags" aria-label="Technologies">{job.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              {job.details && <details className="career-details">
                <summary>{job.detailsLabel}</summary>
                <ul className="achievement-list">{job.details.map((item) => <li key={item}>{item}</li>)}</ul>
              </details>}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
