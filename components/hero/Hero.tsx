import { FC } from 'react';
import BreakoutRoom from './BreakoutRoom';
import CallToolbar from './CallToolbar';
import CallUsers from './CallUsers';
import CanvasesList from './CanvasesList';
import Chat from './Chat';
import ChatMessage from './ChatMessage';
import LearnerCursor from './LearnerCursor';
import LiveIndicator from './LiveIndicator';
import Poll from './Poll';
import Timer from './Timer';

const Hero: FC = () => {
  return (
    <header>
      <div className="pt-[96px] mx-auto mt-40 w-[calc(100%-48px)] max-w-[1143px] aspect-[16/10] ring-on-surface ring-[16px] border-on-surface rounded-[24px] relative">
        <LiveIndicator />
        <ChatMessage />
        <CanvasesList />
        <BreakoutRoom />
        <Timer />
        <Poll />
        <h1
          className="mb-8 font-bold text-center text-display-lg text-on-surface"
          style={{ fontSize: 80, lineHeight: '110%' }}
        >
          Introducing <br />
          Prisma Live
        </h1>
        <p className="max-w-xl mx-auto text-center text-on-surface-variant text-headline">
          A new, fun and engaging way for kids to learn and collaborate together
          virtually.
        </p>
        <CallUsers />
        <CallToolbar />
        <Chat />
        <LearnerCursor />
      </div>
    </header>
  );
};

export default Hero;
