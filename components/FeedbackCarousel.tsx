import Image from 'next/image';
import { FC } from 'react';

const FeedbackCarousel: FC = () => {
  return (
    <ul className="w-screen py-20 mb-20 [&>*]:align-top overflow-x-auto snap-x snap-mandatory lg:snap-proximity ml-[50%] -translate-x-1/2 whitespace-nowrap px-[calc(50vw-50%)] scrollbar-none">
      {[
        {
          imageSrc: '/img/feedback/claire.png',
          text: '“Prisma LIVE helps ensure that I am focused on facilitating the best possible workshop for my learners. Everything we need for the session is in one place, and I no longer juggle eight different windows at once!”',
          name: 'Claire C.',
          roleChip: (
            <span className="bg-coach-container text-on-coach-container px-2 py-0.5 rounded-2">
              Prisma coach
            </span>
          ),
        },
        {
          imageSrc: '/img/feedback/benb.svg',
          text: '“Prisma LIVE is cool! It makes learning a lot more fun and interesting than Zoom."',
          name: 'Ben B.',
          roleChip: (
            <span className="bg-learner-container text-on-learner-container px-2 py-0.5 rounded-2">
              Prisma learner
            </span>
          ),
        },
        {
          imageSrc: '/img/feedback/james.png',
          text: '“Prisma LIVE is a total game changer! It puts the students and teachers first, which makes it feel like an extension of yourself and not a clunky tool.”',
          name: 'James M.',
          roleChip: (
            <span className="bg-yellow-container text-on-yellow-container px-2 py-0.5 rounded-2">
              Prisma curriculum designer
            </span>
          ),
        },
        {
          imageSrc: '/img/feedback/benw.svg',
          text: '“I feel much more comfortable and happy with Prisma than with a public school.”',
          name: 'Ben W.',
          roleChip: (
            <span className="bg-learner-container text-on-learner-container px-2 py-0.5 rounded-2">
              Prisma learner
            </span>
          ),
        },
      ].map((cardData) => (
        <li className="inline-block p-10 rounded-[48px] shadow space-y-8 bg-surface w-full first:ml-0 last:mr-0 mx-4 max-w-[439px] h-fit flex-shrink-0 snap-center">
          <div
            className="relative overflow-clip rounded-[32px] w-20 h-20 shadow-lg bg-on-surface/8"
            role="presentation"
          >
            <Image src={cardData.imageSrc} layout="fill" />
          </div>
          <p className="whitespace-normal text-headline text-on-surface-variant">
            {cardData.text}
          </p>
          <div className="font-medium whitespace-normal text-on-surface text-body">
            {cardData.name} {cardData.roleChip}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackCarousel;
