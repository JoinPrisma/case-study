import { FC } from 'react';

const FeedbackCarousel: FC = () => {
  return (
    <ul className="w-screen py-20 mb-20 overflow-x-auto snap-x snap-mandatory lg:snap-proximity ml-[50%] -translate-x-1/2 whitespace-nowrap px-[calc(50vw-50%)] scrollbar-none">
      {[
        {
          imageSrc: '',
          text: 'Gabby has been very happy with her first couple days—and went to sleep last night saying “I cannot wait for school tomorrow!” I think that’s a first',
          name: 'Mia L.',
          roleChip: (
            <span className="bg-coach-container text-on-coach-container px-2 py-0.5 rounded-2">
              Prisma coach
            </span>
          ),
        },
        {
          imageSrc: '',
          text: '“I feel much more comfortable and happy with Prisma than with a public school.”',
          name: 'Emma M.',
          roleChip: (
            <span className="bg-learner-container text-on-learner-container px-2 py-0.5 rounded-2">
              Prisma learner
            </span>
          ),
        },
        {
          imageSrc: '',
          text: 'Gabby has been very happy with her first couple days—and went to sleep last night saying “I cannot wait for school tomorrow!” I think that’s a first',
          name: 'Mia L.',
          roleChip: (
            <span className="bg-yellow-container text-on-yellow-container px-2 py-0.5 rounded-2">
              Prisma curriculum designer
            </span>
          ),
        },
        {
          imageSrc: '',
          text: '“I feel much more comfortable and happy with Prisma than with a public school.”',
          name: 'Ben W.',
          roleChip: (
            <span className="bg-learner-container text-on-learner-container px-2 py-0.5 rounded-2">
              Prisma learner
            </span>
          ),
        },
      ].map((cardData) => (
        <li className="inline-block p-10 rounded-[48px] shadow space-y-8 bg-surface w-full mx-4 max-w-[439px] h-fit flex-shrink-0 snap-center">
          <img
            src={cardData.imageSrc}
            className="rounded-[32px] w-20 h-20 shadow-lg bg-on-surface/8"
            role="presentation"
          />
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
