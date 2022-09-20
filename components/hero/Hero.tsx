import clsx from 'clsx';
import { FC, useState } from 'react';
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
  const [canvasClass, setCanvasClass] = useState<string | null>(null);

  return (
    <header>
      <div
        className={clsx(
          'mx-auto sm:mt-40 w-full sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] min-h-[735px] sm:min-h-0 sm:h-auto max-w-[1143px] sm:aspect-[16/10] ring-on-surface sm:ring-[8px] md:ring-[16px] border-on-surface rounded-[24px] relative transition-colors transition-500',
          canvasClass
        )}
      >
        <h1 className="pt-[185px] sm:pt-[70px] md:pt-[96px] mb-12 font-bold text-center text-display-lg text-on-surface sm:scale-[133%]">
          {/* make larger with transform */}
          Introducing <br />
          Prisma Live
        </h1>
        <p className="max-w-xl px-1 mx-auto text-center text-on-surface-variant text-headline">
          A new, fun and engaging way for kids to learn and collaborate together
          virtually.
        </p>
        <div className="hidden md:contents">
          <CanvasesList setCanvasClass={setCanvasClass} />
          <Chat />
        </div>
        <BreakoutRoom />
        <ChatMessage />
        <Timer />
        <LiveIndicator />
        <CallToolbar />
        <Poll />
        <CallUsers />
        <LearnerCursor />
      </div>
    </header>
  );
};

export default Hero;
