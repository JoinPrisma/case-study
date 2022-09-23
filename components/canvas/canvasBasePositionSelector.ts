import { isEqual } from 'lodash';
import canvasBaseSizeSelector from './canvasBaseSizeSelector';
import canvasSafeZoneSizeAtom from './canvasSafeZoneSizeAtom';
import { equalSelector } from './equalSelector';
import { Position } from './types';

const canvasBasePositionSelector = equalSelector<Position | undefined>({
  key: 'canvasBasePositionSelector',
  get: ({ get }) => {
    const baseSize = get(canvasBaseSizeSelector);
    const safeZoneSize = get(canvasSafeZoneSizeAtom);

    if (baseSize && safeZoneSize) {
      return {
        x: (safeZoneSize.width - baseSize.width) / 2,
        y: (safeZoneSize.height - baseSize.height) / 2,
      };
    }
  },
  equals: isEqual,
});

export default canvasBasePositionSelector;
