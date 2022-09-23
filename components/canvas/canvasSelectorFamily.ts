import { isEqual } from 'lodash';
import { equalSelectorFamily } from 'recoil/utils/equalSelectorFamily';
import canvasWidgetIdsSelectorFamily from 'recoil/workshop/selectors/document/canvases/canvasWidgetIdsSelectorFamily';
import canvasBackgroundSelectorFamily from './canvasBackgroundSelectorFamily';
import canvasNameSelectorFamily from './canvasNameSelectorFamily';

// For usage in recoil callbacks.
// Never subscribe to this selector since it's really inefficient.
// TODO better typing
const canvasSelectorFamily = equalSelectorFamily<
  { id: string; name: string; background: string; widgetIds: string[] },
  string
>({
  key: 'canvasSelectorFamily',
  get:
    (roomId) =>
    ({ get }) => {
      const name = get(canvasNameSelectorFamily(roomId))!;
      const background = get(canvasBackgroundSelectorFamily(roomId))!;
      const widgetIds = get(canvasWidgetIdsSelectorFamily(roomId))!;

      return { id: roomId, name, background, widgetIds };
    },
  equals: isEqual,
});

export default canvasSelectorFamily;
