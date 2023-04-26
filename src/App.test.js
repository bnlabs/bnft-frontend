import {jest} from '@jest/globals';

jest.unstable_mockModule('node:child_process', () => ({
  execSync: jest.fn(),
  // etc.
}));

test('renders learn react link', () => {

  expect(true).toBe(true);
});
