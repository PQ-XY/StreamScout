// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const originalError = console.error;

console.error = (...args) => {
  if (
    args[0].includes('[antd: Modal] `visible` is deprecated') ||
    args[0].includes('[antd: Modal] `destroyOnClose` is deprecated')
  ) {
    return;
  }
  originalError(...args);
};