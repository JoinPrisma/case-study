import Image from 'next/image';
import { FC } from 'react';
import Reaction from './Reaction';
import SpeakingIndicator from './SpeakingIndicator';

const CallUsers: FC = () => {
  return (
    <div className="w-fit absolute top-[440px] sm:top-auto sm:bottom-[3.5%] md:bottom-[8%] lg:bottom-[19%] left-1/2 -translate-x-1/2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-1.5 lg:gap-3">
      <div className="relative w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15">
        <Image
          src="/img/hero/avatar-1.png"
          layout="fill"
          className="z-20 rounded-full overflow-clip"
          alt=""
        />
      </div>
      <div className="relative w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15">
        <Image
          src="/img/hero/avatar-2.png"
          layout="fill"
          className="z-20 rounded-full pointer-events-none overflow-clip"
          alt=""
        />
        <Reaction />
      </div>
      <div className="relative w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15">
        <Image
          src="/img/hero/avatar-3.png"
          layout="fill"
          className="z-20 rounded-full overflow-clip"
          alt=""
        />
      </div>
      <div className="relative w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15">
        <SpeakingIndicator />
        <Image
          src="/img/hero/avatar-4.png"
          layout="fill"
          className="rounded-full overflow-clip"
          alt=""
        />
      </div>
    </div>
  );
};

export default CallUsers;
