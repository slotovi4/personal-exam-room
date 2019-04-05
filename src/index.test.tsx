jest.mock('react-dom');
jest.mock('../src/index.tsx', () => () => ({
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn()
}));

describe('App Entry Point - /src/index.tsx', () => {
  it('renders app wihtout error', () => {
    require('./index.tsx');
  });
});
