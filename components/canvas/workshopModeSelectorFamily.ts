import { selectorFamily } from 'recoil';
import workshopModeAtom, { WorkshopMode } from '../atoms/workshopModeAtom';

const workshopModeSelectorFamily = selectorFamily<boolean, WorkshopMode>({
  key: 'workshopModeSelectorFamily',
  get:
    (key) =>
    ({ get }) => {
      const mode = get(workshopModeAtom);

      return mode === key;
    },
});

export default workshopModeSelectorFamily;
