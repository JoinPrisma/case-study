import { isEqual } from 'lodash';
import canvasBaseSizeSelector from './canvasBaseSizeSelector';
import canvasZoomAtom from './canvasZoomAtom';
import { equalSelector } from './equalSelector';
import { Size } from './types';

const canvasSizeSelector = equalSelector<Size | undefined>({
  key: 'canvasSizeSelector',
  get: ({ get }) => {
    const baseSize = get(canvasBaseSizeSelector);

    if (baseSize) {
      const zoom = get(canvasZoomAtom);
      return { width: baseSize.width * zoom, height: baseSize.height * zoom };
    }
  },
  equals: isEqual,
});

export default canvasSizeSelector;
