import { selectorFamily } from 'recoil';
import currentDocumentSnapshotSelector from '../currentDocumentSnapshotSelector';

const canvasBreakoutRoomsSetIdSelectorFamily = selectorFamily<
  string | undefined,
  string
>({
  key: 'canvasBreakoutRoomsSetIdSelectorFamily',
  get:
    (canvasId) =>
    ({ get }) =>
      get(currentDocumentSnapshotSelector)?.v1.rooms[canvasId]
        ?.breakoutRoomsSetId,
});

export default canvasBreakoutRoomsSetIdSelectorFamily;
