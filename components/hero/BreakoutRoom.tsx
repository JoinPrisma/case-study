import { Icon } from '@joinprisma/components';
import Image from 'next/image';
import { FC } from 'react';

const BreakoutRoom: FC = () => {
  return (
    <div
      className="absolute right-[73%] w-fit top-[500px] sm:right-auto sm:top-auto sm:left-[-15%] sm:bottom-[-15%] md:bottom-[9%] lg:left-[-10%] lg:bottom-[10%] -rotate-[2.82deg] space-y-2"
      role="presentation"
    >
      <div
        className="text-body-sm text-on-surface-variant"
        style={{ fontSize: 18 }}
      >
        Group A
      </div>
      <div className="rounded-4 lg:rounded-[36px] bg-[#b0eab5] dark:bg-green-container grid grid-cols-2 gap-1.5 p-1.5 lg:gap-3 lg:p-3 shadow-xl dark:shadow-black/30">
        <div className="relative bg-on-surface/15 w-20 lg:w-[117px] aspect-square rounded-4 lg:rounded-[26px] shadow-lg">
          <Image
            src="/img/hero/avatar-room-1.png"
            layout="fill"
            className="rounded-4 lg:rounded-[26px] overflow-clip"
            alt=""
          />
        </div>
        <div className="relative bg-on-surface/15 w-20 lg:w-[117px] aspect-square rounded-4 lg:rounded-[26px] shadow-md">
          <Image
            src="/img/hero/avatar-room-2.png"
            layout="fill"
            className="rounded-4 lg:rounded-[26px] overflow-clip"
            alt=""
          />
        </div>

        <div className="relative bg-on-surface/15 w-20 lg:w-[117px] aspect-square rounded-4 lg:rounded-[26px] shadow-md">
          <Image
            src="/img/hero/avatar-room-3.png"
            layout="fill"
            className="rounded-4 lg:rounded-[26px] overflow-clip"
            alt=""
          />
        </div>

        <div className="relative bg-on-surface/15 w-20 lg:w-[117px] aspect-square rounded-4 lg:rounded-[26px] shadow-md">
          <Image
            src="/img/hero/avatar-room-4.png"
            layout="fill"
            className="rounded-4 lg:rounded-[26px] overflow-clip"
            alt=""
          />
          <div className="rotate-[2.82deg] absolute w-7 lg:w-10 aspect-square p-1 lg:p-1.5 shadow -top-1.5 -right-1.5 bg-tertiary-container text-on-tertiary-container rounded-2">
            <Icon name="hand" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakoutRoom;
