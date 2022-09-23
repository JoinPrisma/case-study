import { isEqual } from 'lodash';
import { equalSelectorFamily } from 'recoil/utils/equalSelectorFamily';
import currentDocumentSnapshotSelector from '../currentDocumentSnapshotSelector';

const canvasWidgetIdsSelectorFamily = equalSelectorFamily<
  string[] | undefined,
  string
>({
  key: 'canvasWidgetIdsSelectorFamily',
  get:
    (canvasId) =>
    ({ get }) =>
      get(currentDocumentSnapshotSelector)?.v1.rooms[canvasId]?.widgetPositions,
  equals: isEqual,
});

export default canvasWidgetIdsSelectorFamily;
