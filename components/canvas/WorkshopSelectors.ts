import { WorkshopMode } from './workshopModeAtom';
import workshopModeSelectorFamily from './workshopModeSelectorFamily';

export default {
  isEditMode: workshopModeSelectorFamily(WorkshopMode.EDIT),
  isPreviewMode: workshopModeSelectorFamily(WorkshopMode.PREVIEW),
  isLiveMode: workshopModeSelectorFamily(WorkshopMode.LIVE),
};
