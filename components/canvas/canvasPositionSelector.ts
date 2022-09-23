import { isEqual } from 'lodash';
import canvasBasePositionSelector from './canvasBasePositionSelector';
import canvasBaseSizeSelector from './canvasBaseSizeSelector';
import canvasPanOffsetAtom from './canvasPanOffsetAtom';
import canvasSizeSelector from './canvasSizeSelector';
import { equalSelector } from './equalSelector';
import { Position } from './types';

const canvasPositionSelector = equalSelector<Position | undefined>({
  key: 'canvasPositionSelector',
  get: ({ get }) => {
    const basePosition = get(canvasBasePositionSelector);
    const canvasSize = get(canvasSizeSelector);
    const canvasBaseSize = get(canvasBaseSizeSelector);

    if (basePosition && canvasSize && canvasBaseSize) {
      const offset = get(canvasPanOffsetAtom);

      return {
        x:
          basePosition.x +
          canvasBaseSize.width / 2 -
          canvasSize.width / 2 +
          offset.x,
        y:
          basePosition.y +
          canvasBaseSize.height / 2 -
          canvasSize.height / 2 +
          offset.y,
      };
    }
  },
  equals: isEqual,
});

export default canvasPositionSelector;
