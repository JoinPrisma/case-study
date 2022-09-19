import { Icon } from '@joinprisma/components';
import { FC } from 'react';

const Chat: FC = () => {
  return (
    <div
      className="absolute space-y-2 right-3.5 bottom-3.5 w-[50px] aspect-square bg-surface rounded-4 shadow-md"
      role="presentation"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <Icon name="speech-bubble" className="w-6 h-6" />
        <div className="absolute px-2.5 py-1 rounded-full -right-2 -top-2 bg-danger text-surface text-label-sm">
          2
        </div>
      </div>
    </div>
  );
};

export default Chat;
