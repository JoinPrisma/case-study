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
          imageSrc: '/img/feedback/helen.png',
          text: 'Prisma LIVE is a one-stop shop for all that is needed to design a meaningful live experience. Everything is seamlessly integrated into the program, which results in our learners spending less time navigating to content and more time exploring content.',
          name: 'Helen R.',
          roleChip: (
            <span className="bg-yellow-container text-on-surface/80 px-2 py-0.5 rounded-2">
              Prisma curriculum designer
            </span>
          ),
        },
        {
          imageSrc: '/img/feedback/james.png',
          text: '“Prisma LIVE is a total game changer! It puts the students and teachers first, which makes it feel like an extension of yourself and not a clunky tool.”',
          name: 'James M.',
          roleChip: (
            <span className="bg-coach-container text-on-coach-container px-2 py-0.5 rounded-2">
              Prisma coach
            </span>
          ),
        },
      ].map((cardData) => (
        <li
          key={cardData.name}
          className="inline-block p-10 rounded-[48px] shadow dark:shadow-black/30 space-y-8 bg-surface dark:bg-surface-1 first:ml-0 last:mr-0 mx-2 sm:mx-4 w-[439px] max-w-[calc(100vw-52px)] h-fit flex-shrink-0 snap-center"
        >
          <div
            className="relative overflow-clip rounded-[32px] w-20 h-20 shadow-lg bg-on-surface/8"
            role="presentation"
          >
            <Image src={cardData.imageSrc} layout="fill" alt={cardData.name} />
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
