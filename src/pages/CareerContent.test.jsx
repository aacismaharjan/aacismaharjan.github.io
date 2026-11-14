import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';

afterEach(cleanup);

test('career history has real employers in reverse chronology and only one current role', () => {
  const { container, getByText, queryByText } = render(<Experience />);
  expect(Array.from(container.querySelectorAll('h3')).map((node) => node.textContent)).toEqual([
    'Varosa Technology Pvt. Ltd.', 'RISKflo', 'UPTECHSYS Pvt. Ltd.',
  ]);
  expect(container.querySelectorAll('.current-badge')).toHaveLength(1);
  expect(container.querySelector('time').dateTime).toBe('2025-04');
  expect(getByText(/Senior Frontend Engineer/)).toBeTruthy();
  expect(queryByText(/Intelitec|Shout!/)).toBeNull();
  expect(getByText(/31.25%/).textContent).toContain('build time');
  fireEvent.click(getByText('Selected employer projects'));
  expect(getByText(/Erke Dashboard/)).toBeTruthy();
});

test('education preserves the corrected degree grade and omits unknown school dates', () => {
  const { container, getByText } = render(<Education />);
  expect(getByText('3.44 / 4.0')).toBeTruthy();
  const schools = container.querySelectorAll('.education-card');
  expect(schools[0].querySelectorAll('time')).toHaveLength(2);
  expect(schools[1].querySelectorAll('time')).toHaveLength(0);
});

test('featured projects render without fabricated links and more projects are accessible', () => {
  const { container, getByText } = render(<Portfolio />);
  const cards = container.querySelectorAll('.project-featured');
  expect(cards).toHaveLength(2);
  expect(getByText('SnapSewa', { selector: 'h3' })).toBeTruthy();
  cards.forEach((card) => expect(card.querySelectorAll('a')).toHaveLength(0));
  const initialCount = container.querySelectorAll('.cards > .card').length;
  fireEvent.click(getByText('See more', { selector: 'button' }));
  expect(container.querySelectorAll('.cards > .card').length).toBe(initialCount + 3);
});
