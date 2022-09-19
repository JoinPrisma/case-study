import { FC } from 'react';

const ChatMessage: FC = () => {
  return (
    <div
      className="absolute w-[260px] left-[112px] -top-8 -rotate-[2.99deg] shadow-lg bg-primary-container rounded-[24px] rounded-br-1 p-[18px] pt-2 space-y-1"
      role="presentation"
    >
      <div className="text-body-sm text-on-surface-variant">New message</div>
      <div
        className="text-body text-on-surface-variant"
        style={{ fontSize: 18 }}
      >
        Cool <span className="font-bold text-primary">@Amy</span>! I can't wait
        to screen share my project 🤣
      </div>
    </div>
  );
};

export default ChatMessage;
