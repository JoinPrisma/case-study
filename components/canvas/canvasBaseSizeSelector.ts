import { isEqual } from 'lodash';
import { equalSelector } from './equalSelector';
import { Size } from './types';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './utils';
import canvasBaseScaleSelector from './canvasBaseScaleSelector';

const canvasBaseSizeSelector = equalSelector<Size | undefined>({
  key: 'canvasBaseSizeSelector',
  get: ({ get }) => {
    const scale = get(canvasBaseScaleSelector);

    if (scale) {
      return { width: scale * CANVAS_WIDTH, height: scale * CANVAS_HEIGHT };
    }
  },
  equals: isEqual,
});

export default canvasBaseSizeSelector;
