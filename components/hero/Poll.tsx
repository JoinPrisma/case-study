import { Icon } from '@joinprisma/components';
import { FC } from 'react';

const Poll: FC = () => {
  return (
    <div
      className="absolute top-[480px] sm:top-auto left-[57%] sm:left-auto sm:bottom-[-40%] sm:right-[-25%] md:bottom-[-20%] lg:bottom-[19%] lg:right-[-9.5%] w-[300px] rotate-[-2.75deg] bg-surface shadow-lg p-6 rounded-[24px]"
      role="presentation"
    >
      <div className="mb-6 text-center text-display-sm text-on-suface">
        Which one <br /> do you prefer?
      </div>
      <div className="flex items-center gap-3 p-2 mb-1 bg-violet-container text-on-surface-variant rounded-3">
        <div className="w-4 h-4 m-1 rounded-full bg-violet" />
        Cat 🐱
      </div>
      <div className="flex items-center gap-3 p-2 mb-1 bg-green-container text-on-surface-variant rounded-3">
        <div className="w-4 h-4 m-1 rounded-full bg-green" />
        Dog 🐶
      </div>
      <div className="flex items-center gap-3 p-2 shadow-md bg-yellow text-surface rounded-3">
        <Icon name="check" className="w-6 h-6" />
        Love both ❤️
      </div>
    </div>
  );
};

export default Poll;
