import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import CharacterViewer from './CharacterViewer';
import createCharacterScene from './createCharacterScene';

jest.mock('./createCharacterScene', () => jest.fn());
let controller, coarse;
beforeEach(() => {
  coarse = false;
  window.matchMedia = jest.fn(() => ({ matches: coarse, addEventListener: jest.fn(), removeEventListener: jest.fn() }));
  controller = { rotate: jest.fn(), zoom: jest.fn(), reset: jest.fn(), setTouchActive: jest.fn(), dispose: jest.fn() };
  createCharacterScene.mockReset().mockImplementation((host, url, ready) => { ready(); return controller; });
});
afterEach(cleanup);

test('loaded model supports keyboard-accessible view buttons and cleanup', () => {
  const { getByLabelText, getByText, unmount } = render(<CharacterViewer />);
  fireEvent.click(getByLabelText('Rotate character left'));
  fireEvent.click(getByLabelText('Rotate character right'));
  fireEvent.click(getByLabelText('Zoom in'));
  fireEvent.click(getByLabelText('Zoom out'));
  fireEvent.click(getByText('Reset view'));
  expect(controller.rotate.mock.calls).toEqual([[-1], [1]]);
  expect(controller.zoom.mock.calls).toEqual([[1], [-1]]);
  expect(controller.reset).toHaveBeenCalledTimes(1);
  unmount();
  expect(controller.dispose).toHaveBeenCalledTimes(1);
});

test('touch exploration is explicitly activated and released', () => {
  coarse = true;
  const { getByText } = render(<CharacterViewer />);
  fireEvent.click(getByText('Explore in 3D'));
  expect(controller.setTouchActive).toHaveBeenLastCalledWith(true);
  fireEvent.click(getByText('Done'));
  expect(controller.setTouchActive).toHaveBeenLastCalledWith(false);
});

test('model loading failure preserves an illustration and removes view controls', () => {
  let fail;
  createCharacterScene.mockImplementation((host, url, ready, onError) => { fail = onError; return controller; });
  const { getByText, getByAltText, queryByText } = render(<CharacterViewer />);
  expect(getByText('Loading your character…')).toBeTruthy();
  act(() => fail());
  expect(getByAltText('Still preview of the supplied 3D model')).toBeTruthy();
  expect(queryByText('Reset view')).toBeNull();
  expect(getByText(/3D view is unavailable/)).toBeTruthy();
});

test('unavailable WebGL also keeps a usable fallback', () => {
  createCharacterScene.mockImplementation(() => { throw new Error('No WebGL'); });
  const { queryByText, getByAltText } = render(<CharacterViewer />);
  expect(queryByText('Reset view')).toBeNull();
  expect(getByAltText('Still preview of the supplied 3D model')).toBeTruthy();
});
