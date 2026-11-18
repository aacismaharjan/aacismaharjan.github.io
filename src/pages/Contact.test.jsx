import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import Contact from './Contact';

const email = 'aashishmaharjan2001@gmail.com';
const originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');

afterEach(() => {
  cleanup();
  if (originalClipboard) {
    Object.defineProperty(navigator, 'clipboard', originalClipboard);
  } else {
    delete navigator.clipboard;
  }
});

function setClipboard(value) {
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value });
}

test('contact offers a visible email and native email action without a form, phone, or embed', () => {
  const { container, getByText } = render(<Contact />);
  expect(getByText(email).getAttribute('href')).toBe(`mailto:${email}`);
  expect(getByText('Email me').closest('a').getAttribute('href')).toBe(`mailto:${email}`);
  expect(container.querySelector('form, input, textarea, iframe, a[href^="tel:"]')).toBeNull();
  expect(container.textContent).not.toMatch(/9810154589/);
});

test('copy email writes the address and announces success while preserving focus', async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  setClipboard({ writeText });
  const { getByText, getByRole } = render(<Contact />);
  const button = getByText('Copy email');
  button.focus();
  await act(async () => { fireEvent.click(button); });
  expect(writeText).toHaveBeenCalledWith(email);
  expect(getByRole('status').textContent).toBe('Email copied.');
  expect(document.activeElement).toBe(button);
});

test.each(['unavailable', 'denied'])('copy email provides manual instructions when clipboard is %s', async (scenario) => {
  setClipboard(scenario === 'unavailable' ? undefined : { writeText: jest.fn().mockRejectedValue(new Error('Not allowed')) });
  const { getByText, getByRole } = render(<Contact />);
  await act(async () => { fireEvent.click(getByText('Copy email')); });
  expect(getByRole('status').textContent).toBe('Please select and copy the email address above.');
  expect(getByText(email)).toBeTruthy();
});
