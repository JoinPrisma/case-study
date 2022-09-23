import { atom } from 'recoil';
import { Keys } from './types';

type KeyStatus = {
  [k in Keys]?: boolean;
};

const pressedKeysAtom = atom<KeyStatus>({
  key: 'pressedKeysAtom',
  default: {
    [Keys.SHIFT]: false,
    [Keys.SPACEBAR]: false,
  },
  effects: [
    ({ setSelf, resetSelf }) => {
      const handleKeydown = (e: KeyboardEvent) => {
        if (Object.values(Keys).includes(e.key as Keys)) {
          setSelf((keys) => {
            return { ...keys, [e.key]: true };
          });
        }
      };

      const handleKeyup = (e: KeyboardEvent) => {
        if (Object.values(Keys).includes(e.key as Keys)) {
          setSelf((keys) => {
            return { ...keys, [e.key]: false };
          });
        }
      };

      window.addEventListener('keydown', handleKeydown);
      window.addEventListener('keyup', handleKeyup);
      window.addEventListener('blur', resetSelf);
      document.addEventListener('visibilitychange', resetSelf);

      return () => {
        window.removeEventListener('keydown', handleKeydown);
        window.removeEventListener('keyup', handleKeyup);
        window.removeEventListener('blur', resetSelf);
        document.removeEventListener('visibilitychange', resetSelf);
      };
    },
  ],
});

export default pressedKeysAtom;
