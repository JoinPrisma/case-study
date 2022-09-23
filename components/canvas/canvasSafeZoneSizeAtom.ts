import { atom } from 'recoil';
import { Size } from 'types';

const canvasSafeZoneSizeAtom = atom<Size | undefined>({
  key: 'canvasSafeZoneSizeAtom',
  default: undefined,
});

export default canvasSafeZoneSizeAtom;
