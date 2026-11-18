import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';

jest.mock('aos', () => ({ init: jest.fn() }));
jest.mock('./pages/Skills', () => () => null);
jest.mock('./pages/Portfolio', () => () => null);

afterEach(cleanup);

test.each(['/', '/character-preview'])('%s shows the portfolio without either 3D feature', (url) => {
  const history = createMemoryHistory({ initialEntries: [url] });
  const { container, getByText } = render(<Router history={history}><App /></Router>);

  expect(history.location.pathname).toBe('/');
  expect(getByText('Explore my experience')).toBeTruthy();
  expect(getByText('Download CV')).toBeTruthy();
  expect(container.querySelector('#experience')).toBeTruthy();
  expect(container.querySelector('#education')).toBeTruthy();
  expect(container.querySelector('#contact')).toBeTruthy();
  expect(container.querySelector('#blogs, #codepen, a[href="#blogs"], a[href="#codepen"]')).toBeNull();
  expect(Array.from(container.querySelectorAll('.social-icon')).map((link) => link.getAttribute('aria-label'))).toEqual(['LinkedIn', 'GitHub']);
  expect(container.querySelector('canvas, .knight-panel, .character-page')).toBeNull();
  expect(document.body.classList.contains('character-preview-mode')).toBe(false);
});
