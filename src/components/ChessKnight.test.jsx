import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ChessKnight from './ChessKnight';
import createKnightScene from './chess/createKnightScene';

jest.mock('./chess/createKnightScene', () => jest.fn());

let viewer;
let coarse;
beforeEach(() => {
  coarse = false;
  window.matchMedia = jest.fn((query) => ({
    matches: query === '(any-pointer: coarse)' && coarse,
    addEventListener: jest.fn(), removeEventListener: jest.fn(),
  }));
  viewer = { rotate: jest.fn(), reset: jest.fn(), setTouchActive: jest.fn(), dispose: jest.fn() };
  createKnightScene.mockReset().mockReturnValue(viewer);
});
afterEach(cleanup);

test('keyboard exploration controls the scene without a button row, and unmount releases it', () => {
  const { getByLabelText, queryByText, queryByLabelText, unmount } = render(<ChessKnight />);
  const stage = getByLabelText('3D chess knight');
  fireEvent.keyDown(stage, { key: 'ArrowLeft' });
  fireEvent.keyDown(stage, { key: 'ArrowRight' });
  fireEvent.keyDown(stage, { key: 'Home' });
  expect(viewer.rotate.mock.calls).toEqual([[-1], [1]]);
  expect(viewer.reset).toHaveBeenCalledTimes(1);
  expect(queryByText('Reset view')).toBeNull();
  expect(queryByLabelText('Rotate knight left')).toBeNull();
  unmount();
  expect(viewer.dispose).toHaveBeenCalledTimes(1);
});

test('touch interaction requires activation and Done releases the scene for scrolling', () => {
  coarse = true;
  const { getByText } = render(<ChessKnight />);
  fireEvent.click(getByText('Explore in 3D'));
  expect(viewer.setTouchActive).toHaveBeenLastCalledWith(true);
  expect(getByText('Done').getAttribute('aria-pressed')).toBe('true');
  fireEvent.click(getByText('Done'));
  expect(viewer.setTouchActive).toHaveBeenLastCalledWith(false);
  expect(getByText('Explore in 3D').getAttribute('aria-pressed')).toBe('false');
});

test('unavailable WebGL keeps the static knight and omits unavailable controls', () => {
  createKnightScene.mockImplementation(() => { throw new Error('WebGL unavailable'); });
  const { getByAltText, queryByText } = render(<ChessKnight />);
  expect(getByAltText('Copper chess knight on a checkerboard plinth')).toBeTruthy();
  expect(queryByText('Reset view')).toBeNull();
});
