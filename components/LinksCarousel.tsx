import { Icon } from '@joinprisma/components';
import { FC } from 'react';

const LinksCarousel: FC = () => {
  return (
    <ul className="w-screen py-20 mb-20 [&>*]:align-top [&>*]:inline-block overflow-x-auto snap-x snap-mandatory lg:snap-proximity ml-[50%] -translate-x-1/2 whitespace-nowrap px-[calc(50vw-50%)] scrollbar-none">
      {[
        // {
        //   heading: 'Try our text editor out!',
        //   text: null,
        //   linkText: 'Go to playground',
        //   linkUrl: 'https://text.joinprisma.com',
        // },
        {
          heading: 'How our collaborative editor works',
          text: 'A series of articles inspired by how we built a collaborative conflict-free editor.',
          linkText: 'Read part 1 now',
          linkUrl:
            'https://www.streaver.com/blog/posts/crdts-and-distributed-consistency-part-1-building-a-distributed-counter',
        },
        {
          heading: 'How did we make canvas changes performant?',
          text: 'Re-mounting videos without losing frames was made possible thanks to React Reverse Portals.',
          linkText: 'Read now',
          linkUrl:
            'https://www.wyeworks.com/blog/2022/09/12/optimizing-expensive-react-component-mounts',
        },
        {
          heading: 'Screenshot testing UI components',
          text: "To make sure our components didn't break on unrelated changes, we added automated screenshots to our CI pipeline.",
          linkText: 'Read now',
          linkUrl:
            'https://www.wyeworks.com/blog/2022/03/16/screenshot-testing-react-components-with-viteshot',
        },
      ].map((cardData, index) => (
        <li
          className="px-10 snap-center py-8 rounded-[48px] first:shadow space-y-6 first:ml-0 last:mr-0 mx-2 bg-outline/12 dark:bg-surface-1 first:bg-surface w-[420px] max-w-[calc(100vw-52px)] h-fit flex-shrink-0"
          key={index}
        >
          <h3 className="whitespace-normal text-display-sm text-on-surface">
            {cardData.heading}
          </h3>
          {cardData.text && (
            <p className="whitespace-normal text-body text-outline">
              {cardData.text}
            </p>
          )}
          <div className="flex justify-end underline cursor-pointer text-on-surface-variant hover:text-on-surface-variant-hover active:text-on-surface-variant-active text-body">
            <a
              className="flex gap-2"
              href={cardData.linkUrl}
              target="_blank"
              rel="noreferrer"
            >
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
