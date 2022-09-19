import { Icon } from '@joinprisma/components';
import { FC } from 'react';

const LinksCarousel: FC = () => {
  return (
    <ul className="w-screen py-20 mb-20 [&>*]:align-top [&>*]:inline-block overflow-x-auto snap-x snap-mandatory lg:snap-proximity ml-[50%] -translate-x-1/2 whitespace-nowrap px-[calc(50vw-50%)] scrollbar-none">
      {[
        {
          heading: 'Try it out!',
          text: null,
          linkText: 'Go to playground',
          linkUrl: 'https://text.joinprisma.com',
        },
        {
          heading: 'How our collaborative editor works',
          text: 'Cake liquorice bear claw chocolate macaroon jelly beans sweet sesame snaps. Gummies chocolate jelly-o cheesecake sugar plum soufflé pudding lollipop caramels.',
          linkText: 'Read now',
          linkUrl: '',
        },
        {
          heading: 'How we solved performance issues',
          text: 'Icing sesame snaps chocolate cake chocolate bar halvah lemon drops oat cake.',
          linkText: 'Read now',
          linkUrl: '',
        },
        {
          heading: 'How our collaborative editor works',
          text: 'Cake liquorice bear claw chocolate macaroon jelly beans sweet sesame snaps. Gummies chocolate jelly-o cheesecake sugar plum soufflé pudding lollipop caramels.',
          linkText: 'Read now',
          linkUrl: '',
        },
      ].map((cardData) => (
        <li className="px-10 py-8 rounded-[48px] first:shadow space-y-6 mx-2 bg-outline/12 first:bg-surface w-full max-w-[420px] h-fit flex-shrink-0">
          <h3 className="whitespace-normal text-display-sm text-on-surface">
            {cardData.heading}
          </h3>
          {cardData.text && (
            <p className="whitespace-normal text-body text-outline">
              {cardData.text}
            </p>
          )}
          <div className="flex justify-end underline cursor-pointer text-on-surface-variant hover:text-on-surface-variant-hover active:text-on-surface-variant-active text-body">
            <a className="flex gap-2" href={cardData.linkUrl} target="_blank">
              {cardData.linkText}
              <Icon className="w-6 h-6" name="arrow" variant="right" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LinksCarousel;
