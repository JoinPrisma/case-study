import { selectorFamily } from 'recoil';
import currentDocumentSnapshotSelector from '../currentDocumentSnapshotSelector';

const canvasExistsSelectorFamily = selectorFamily<boolean, string>({
  key: 'canvasExistsSelectorFamily',
  get:
    (canvasId) =>
    ({ get }) =>
      !!get(currentDocumentSnapshotSelector)?.v1.rooms[canvasId],
});

export default canvasExistsSelectorFamily;
