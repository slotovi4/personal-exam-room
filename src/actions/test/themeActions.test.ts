import store from '../../store';
import { setThemeStyle } from '../themeActions';

describe('Theme actions', () => {
  describe('setThemeStyle', () => {
    it('Success added dark theme', () => {
      const res = setThemeStyle('dark');
      res(store.dispatch);

      expect(store.getState().theme).toEqual({ theme: 'dark' });
    });

    it('Success added light theme', () => {
      const res = setThemeStyle('light');
      res(store.dispatch);

      expect(store.getState().theme).toEqual({ theme: 'light' });
    });
  });
});
