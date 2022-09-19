import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  color: 'yellow' | 'purple';
  text: string;
};

const Heading: FC<Props> = ({ text, color }) => {
  return (
    <h2
      className={clsx(
        'sm:mx-20 pl-4 sm:pl-8 border-l-4 sm:border-l-[10px] my-10 text-on-surface text-display-lg',
        {
          'border-yellow': color === 'yellow',
          'border-purple': color === 'purple',
        }
      )}
    >
      {text}
    </h2>
  );
};

export default Heading;
