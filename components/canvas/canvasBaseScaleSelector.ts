import { selector } from 'recoil';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from 'utils/constants';
import canvasSafeZoneSizeAtom from './canvasSafeZoneSizeAtom';

const canvasBaseScaleSelector = selector<number | undefined>({
  key: 'canvasBaseScaleSelector',
  get: ({ get }) => {
    const safeZoneSize = get(canvasSafeZoneSizeAtom);

    if (safeZoneSize) {
      const scaleX = safeZoneSize.width / CANVAS_WIDTH;
      const scaleY = safeZoneSize.height / CANVAS_HEIGHT;
      return Math.min(scaleX, scaleY);
    }
  },
});

export default canvasBaseScaleSelector;
