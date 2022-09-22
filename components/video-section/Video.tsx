import clsx from 'clsx';
import { FC, ReactNode, useRef, useState } from 'react';

type Props = {
  background: string;
  videoUrl: string;
  videoPoster: string;
  title: string | ReactNode;
  titleClass: string;
  type: 'A' | 'B' | 'C' | 'D';
};

const Video: FC<Props> = ({
  background,
  videoPoster,
  videoUrl,
  title,
  titleClass,
  type,
}) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [wasPlayed, setWasPlayed] = useState(false);

  const togglePlay = () => {
    ref.current?.play();
  };

  return (
    <div
      className={clsx(
        'rounded-4 aspect-[16/10] w-full sm:w-4/5 lg:w-[580px] xl:w-[690px] relative flex-shrink-0 sm:overflow-hidden group',
        background
      )}
    >
      <video
        ref={ref}
        controls={true}
        preload="none"
        width="100%"
        poster={videoPoster}
        className={clsx(
          'absolute rounded-1 inset-0 sm:ring-[16px] ring-on-surface dark:ring-black bg-black transition-transform',
          !wasPlayed &&
            'group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 cursor-pointer',
          !wasPlayed && {
            'sm:rotate-[2.34deg] sm:translate-x-[5px] sm:translate-y-[-35px] sm:scale-[85%]':
              type === 'A',
            'sm:rotate-[1.69deg] sm:translate-x-[75px] sm:translate-y-[40px] sm:scale-[90%]':
              type === 'B',
            'sm:rotate-[-1.21deg] sm:translate-x-[5px] sm:translate-y-[-40px] sm:scale-[82%]':
              type === 'C',
            'sm:rotate-[-1.03deg] sm:translate-x-[75px] sm:translate-y-[40px] sm:scale-[92%]':
              type === 'D',
          }
        )}
        onClick={togglePlay}
        onPlay={() => setWasPlayed(true)}
      >
        <source id="mp4" src={videoUrl} type="video/mp4" />
      </video>
      <div
        className={clsx(
          'absolute text-surface shadow-md text-display-lg px-2 py-1.5 rounded-2 pointer-events-none transition-opacity',
          titleClass,
          wasPlayed ? 'hidden' : 'group-hover:opacity-0',
          {
            'left-[4%] bottom-[80%] sm:bottom-[11%] rotate-[-0.81deg]':
              type === 'A',
            'rotate-[2deg] left-[5%] bottom-[70%] sm:bottom-[12%]':
              type === 'B',
            'left-[5%] bottom-[70%] sm:bottom-[10%] rotate-[-0.81deg]':
              type === 'C',
            'rotate-[2deg] bottom-[80%] left-[5%] sm:bottom-[10%]':
              type === 'D',
          }
        )}
        style={{
          textShadow:
            '0px 22.1px 27.6px rgba(0, 0, 0, 0.1), 0px 8.8px 11px rgba(0, 0, 0, 0.1)',
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default Video;
