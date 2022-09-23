import { selectorFamily } from 'recoil';
import currentDocumentSnapshotSelector from '../currentDocumentSnapshotSelector';

const canvasBackgroundSelectorFamily = selectorFamily<
  string | null | undefined,
  string
>({
  key: 'canvasBackgroundSelectorFamily',
  get:
    (canvasId) =>
    ({ get }) =>
      get(currentDocumentSnapshotSelector)?.v1.rooms[canvasId]?.background,
});

export default canvasBackgroundSelectorFamily;
