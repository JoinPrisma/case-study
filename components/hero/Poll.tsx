import { Icon } from '@joinprisma/components';
import clsx from 'clsx';
import { FC, useState } from 'react';

const Poll: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <div
      className="absolute top-[480px] sm:top-auto left-[57%] sm:left-auto sm:bottom-[-40%] sm:right-[-25%] md:bottom-[-20%] lg:bottom-[19%] lg:right-[-9.5%] w-[300px] rotate-[-2.75deg] bg-surface shadow-lg p-6 rounded-[24px]"
      role="presentation"
    >
      <div className="mb-6 text-center text-display-sm text-on-suface">
        Which one <br /> do you prefer?
      </div>
      <div
        className={clsx(
          'flex items-center gap-3 p-2 rounded-3 mb-1 transition-colors',
          selectedIndex === 0
            ? 'bg-violet text-surface shadow-md'
            : 'bg-violet-container hover:bg-violet-container-hover text-on-surface-variant cursor-pointer'
        )}
        onClick={() => setSelectedIndex(0)}
      >
        {selectedIndex === 0 ? (
          <Icon name="check" className="w-6 h-6" />
        ) : (
          <div className="w-4 h-4 m-1 rounded-full bg-violet" />
        )}
        Cat 🐱
      </div>
      <div
        className={clsx(
          'flex items-center gap-3 p-2 rounded-3 mb-1 transition-colors',
          selectedIndex === 1
            ? 'bg-green text-surface shadow-md'
            : 'bg-green-container hover:bg-green-container-hover text-on-surface-variant cursor-pointer'
        )}
        onClick={() => setSelectedIndex(1)}
      >
        {selectedIndex === 1 ? (
          <Icon name="check" className="w-6 h-6" />
        ) : (
          <div className="w-4 h-4 m-1 rounded-full bg-green" />
        )}
        Dog 🐶
      </div>
      <div
        className={clsx(
          'flex items-center gap-3 p-2 rounded-3 transition-colors',
          selectedIndex === 2
            ? 'bg-yellow text-surface'
            : 'bg-yellow-container hover:bg-yellow-container-hover text-on-surface-variant cursor-pointer'
        )}
        onClick={() => setSelectedIndex(2)}
      >
        {selectedIndex === 2 ? (
          <Icon name="check" className="w-6 h-6" />
        ) : (
          <div className="w-4 h-4 m-1 rounded-full bg-yellow" />
        )}
        Love both ❤️
      </div>
    </div>
  );
};

export default Poll;
