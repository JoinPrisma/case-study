import { Icon, Toolbar } from '@joinprisma/components';
import { FC } from 'react';

const CallToolbar: FC = () => {
  return (
    <div
      className="absolute -translate-x-1/2 w-fit left-1/2 bottom-3"
      role="presentation"
    >
      <Toolbar name="">
        <div className="flex items-center justify-center w-10 h-10 bg-danger-container text-danger rounded-2">
          <Icon name="microphone" variant="off" className="w-7 h-7" />
        </div>
        <Icon name="camera" className="m-1.5 w-7 h-7 text-on-surface-variant" />
        <Icon
          name="screenshare"
          className="m-1.5 w-7 h-7 text-on-surface-variant"
        />
        <div className="flex items-center">
          <Icon
            name="emoji"
            className="m-1.5 w-7 h-7 text-on-surface-variant"
          />
          <Icon
            name="chevron"
            variant="down"
            className="w-6 h-6 text-outline"
          />
        </div>
        <Icon
          name="audience"
          className="m-1.5 w-7 h-7 text-on-surface-variant"
        />
        <Icon name="cursor" className="m-1.5 w-7 h-7 text-on-surface-variant" />
        <div className="flex items-center justify-center gap-3 pl-3 pr-4 font-bold shadow h-9 bg-tertiary-container text-on-tertiary-container rounded-3">
          <Icon name="hand" className="w-7 h-7" />1
        </div>
      </Toolbar>
    </div>
  );
};

export default CallToolbar;
