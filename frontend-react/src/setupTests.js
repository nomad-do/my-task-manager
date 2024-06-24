import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

/* eslint-disable no-console */
const originalError = console.error;

beforeAll(() => {
  console.error = (...args) => {
    if (args[0].includes("Warning: `ReactDOMTestUtils.act` is deprecated")) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
/* eslint-enable no-console */
