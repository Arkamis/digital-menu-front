const { atom } = require('recoil');

export const appState = atom({
  key: 'appState',
  default: {
    isLoading: false,
  },
});
