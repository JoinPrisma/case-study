import { selectorFamily } from 'recoil';
import canvasWidgetIdsSelectorFamily from 'recoil/workshop/selectors/document/canvases/canvasWidgetIdsSelectorFamily';
import widgetTypeSelectorFamily from '../widgets/widgetTypeSelectorFamily';

const canvasPollWidgetIdSelectorFamily = selectorFamily<
  string | undefined,
  string
>({
  key: 'canvasPollWidgetIdSelectorFamily',
  get:
    (roomId) =>
    ({ get }) => {
      const widgetIds = get(canvasWidgetIdsSelectorFamily(roomId));

      return widgetIds?.find(
        (widgetId) => get(widgetTypeSelectorFamily(widgetId)) === 'POLL'
      );
    },
});

export default canvasPollWidgetIdSelectorFamily;
