import { Keys } from 'utils/constants';
import pressedKeySelectorFamily from './selectors/pressedKeySelectorFamily';

export default {
  isShiftPressed: pressedKeySelectorFamily(Keys.SHIFT),
  isSpacebarPressed: pressedKeySelectorFamily(Keys.SPACEBAR),
};
