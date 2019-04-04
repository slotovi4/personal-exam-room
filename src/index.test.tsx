jest.mock('react-dom');
jest.mock('../src/index', () => () => ({
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn()
}));

describe('App Entry Point - /src/index.js', () => {
  it('renders app wihtout error', () => {
    require('./index.tsx');
  });
});
