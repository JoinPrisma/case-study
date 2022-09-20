import { FC } from 'react';

const ChatMessage: FC = () => {
  return (
    <div
      className="absolute w-[260px] top-[-5px] left-[-15px] sm:left-[-5%] sm:top-[-10%] md:left-[1%] lg:left-[10%] lg:top-[-5%] -rotate-[2.99deg] shadow-lg bg-primary-container rounded-[24px] rounded-br-1 p-[18px] pt-2 space-y-1"
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
