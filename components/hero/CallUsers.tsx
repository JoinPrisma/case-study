import { FC } from 'react';
import Reaction from './Reaction';
import SpeakingIndicator from './SpeakingIndicator';

const CallUsers: FC = () => {
  return (
    <div className="w-fit absolute top-[440px] sm:top-auto sm:bottom-[3.5%] md:bottom-[8%] lg:bottom-[19%] left-1/2 -translate-x-1/2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-1.5 lg:gap-3">
      <div className="w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15" />
      <div className="relative w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15">
        <Reaction />
      </div>
      <div className="w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15" />
      <div className="relative w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15">
        <SpeakingIndicator />
        <div className="absolute inset-0 z-10 w-full h-full rounded-full bg-surface" />
      </div>
    </div>
  );
};

export default CallUsers;
