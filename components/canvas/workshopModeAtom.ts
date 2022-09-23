import { atom } from 'recoil';

export enum WorkshopMode {
  LIVE = 'LIVE',
  PREVIEW = 'PREVIEW',
  EDIT = 'EDIT',
}

const workshopModeAtom = atom<WorkshopMode | null>({
  key: 'workshopModeAtom',
  default: null,
  effects: [
    ({ setSelf, trigger }) => {
      if (trigger === 'get') {
        // This sets the initial value
        setSelf(
          window.location.pathname.includes('/join') ||
            window.location.pathname.includes('/live') ||
            window.location.pathname.includes('/chat') ||
            window.location.pathname.includes('/call')
            ? WorkshopMode.LIVE
            : WorkshopMode.EDIT
        );
      }
    },
  ],
});

export default workshopModeAtom;
