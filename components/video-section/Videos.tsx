import { FC } from 'react';
import Video from './Video';

const Videos: FC = () => {
  return (
    <ul className="mb-20 space-y-40">
      {[
        {
          heading: 'Making live teaching a breeze',
          body: 'Prisma LIVE brings together all the content and faciliation tools in one place, freeing up teachers to focus on what matters most: connecting with kids and providing a great learning experience.',
          videoTitle: 'Overview',
          videoTitleClass:
            'bg-yellow left-[51px] bottom-[58px] rotate-[-0.81deg]',
          videoBackground: '#FFD38B',
          videoPoster: 'https://assets.codepen.io/32795/poster.png',
          videoUrl: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
          type: 'A',
        },
        {
          heading:
            'An immersive learning experience, not a stale video conference',
          body: 'Prisma LIVE turns static lessons into interactive, dynamic experiences that alternate seamlessly and naturally between layouts and interactive elements.',
          videoTitle: (
            <div>
              Learner <br /> experience
            </div>
          ),
          videoTitleClass: 'bg-green',
          videoBackground: '#81E088',
          videoPoster: 'https://assets.codepen.io/32795/poster.png',
          videoUrl: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
          type: 'B',
        },
        {
          heading: 'Breakout rooms that aren’t awkward',
          body: 'We’ve designed our breakout rooms so educators can observe what’s going on without disturbing learners. No more cycling through rooms trying to understand what’s going on. At the same time, learners have all instructions and materials right at their fingertips inside each room.',
          videoTitle: (
            <div>
              Breakout <br /> rooms
            </div>
          ),
          videoTitleClass: 'bg-purple',
          videoBackground: '#E2AEFF',
          videoPoster: 'https://assets.codepen.io/32795/poster.png',
          videoUrl: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
          type: 'C',
        },
        {
          heading: 'A collaborative editor for curriculum designers',
          body: 'The editor is where live learning experiences are designed. We’ve made it performant and collaborative',
          videoTitle: 'Editor',
          videoTitleClass: 'bg-blue',
          videoBackground: '#BCD4FF',
          videoPoster: 'https://assets.codepen.io/32795/poster.png',
          videoUrl: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
          type: 'D',
        },
      ].map((videoData) => (
        <li
          className="flex flex-col-reverse items-center lg:flex-row lg:gap-20 lg:odd:flex-row-reverse"
          key={videoData.heading}
        >
          <div className="pt-8 space-y-6 sm:px-10 lg:px-5 xl:px-10">
            <h3 className="text-display text-on-surface">
              {videoData.heading}
            </h3>
            <p className="text-outline text-headline">{videoData.body}</p>
          </div>
          <Video
            background={videoData.videoBackground}
            videoUrl={videoData.videoUrl || ''}
            videoPoster={videoData.videoPoster || ''}
            title={videoData.videoTitle}
            titleClass={videoData.videoTitleClass}
            type={(videoData.type as any) || 'A'}
          />
        </li>
      ))}
    </ul>
  );
};

export default Videos;
