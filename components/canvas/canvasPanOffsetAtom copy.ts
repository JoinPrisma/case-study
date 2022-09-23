import { atom } from 'recoil';
import { Position } from 'types';

const canvasPanOffsetAtom = atom<Position>({
  key: 'canvasPanOffsetAtom',
  default: { x: 0, y: 0 },
});

export default canvasPanOffsetAtom;
