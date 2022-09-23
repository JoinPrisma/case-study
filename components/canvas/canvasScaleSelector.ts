import { selector } from 'recoil';
import canvasBaseScaleSelector from './canvasBaseScaleSelector';
import canvasZoomAtom from './canvasZoomAtom';

const canvasScaleSelector = selector<number | undefined>({
  key: 'canvasScaleSelector',
  get: ({ get }) => {
    const scale = get(canvasBaseScaleSelector);

    if (scale) {
      return scale * get(canvasZoomAtom);
    }
  },
});

export default canvasScaleSelector;
