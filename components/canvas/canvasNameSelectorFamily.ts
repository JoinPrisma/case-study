import { selectorFamily } from 'recoil';
import currentDocumentSnapshotSelector from '../currentDocumentSnapshotSelector';

const canvasNameSelectorFamily = selectorFamily<string | undefined, string>({
  key: 'canvasNameSelectorFamily',
  get:
    (canvasId) =>
    ({ get }) =>
      get(currentDocumentSnapshotSelector)?.v1.rooms[canvasId]?.name,
});

export default canvasNameSelectorFamily;
