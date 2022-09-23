import { atom } from 'recoil';

export const MIN_ZOOM_LEVEL = 1;
export const MAX_ZOOM_LEVEL = 2;

const canvasZoomAtom = atom<number>({
  key: 'canvasZoomAtom',
  default: 1,
});

export default canvasZoomAtom;
