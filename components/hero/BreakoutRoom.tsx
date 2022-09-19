import { Icon } from '@joinprisma/components';
import { FC } from 'react';

const BreakoutRoom: FC = () => {
  return (
    <div
      className="absolute left-[-10%] bottom-[10%] -rotate-[2.82deg] space-y-2"
      role="presentation"
    >
      <div
        className="text-body-sm text-on-surface-variant"
        style={{ fontSize: 18 }}
      >
        Group A
      </div>
      <div className="rounded-[36px] bg-[#b0eab5] grid grid-cols-2 gap-3 p-3 shadow-xl">
        <div className="bg-on-surface/15 w-[117px] aspect-square rounded-[26px] shadow-md" />
        <div className="bg-on-surface/15 w-[117px] aspect-square rounded-[26px] shadow-md" />
        <div className="bg-on-surface/15 w-[117px] aspect-square rounded-[26px] shadow-md" />
        <div className="bg-on-surface/15 w-[117px] aspect-square rounded-[26px] shadow-md relative">
          <div className="rotate-[2.82deg] absolute w-10 h-10 p-1.5 shadow -top-1.5 -right-1.5 bg-tertiary-container text-on-tertiary-container rounded-2">
            <Icon name="hand" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakoutRoom;
