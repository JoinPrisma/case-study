import Image from 'next/image';
import { FC } from 'react';

const TeamSection: FC = () => {
  return (
    <ul className="grid grid-cols-1 mb-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 place-items-center">
      {[
        {
          imageUrl: '/img/team/andres.png',
          color: '#F5B981',
          name: 'Andrés',
          title: 'Software Engineer',
          social: {
            linkedin: 'andresvidalberriel',
          },
        },
        {
          imageUrl: '/img/team/andrea.png',
          color: '#FFB4A9',
          name: 'Andrea',
          title: 'Software Engineer',
          social: {
            linkedin: 'aphillipsr',
          },
        },
        {
          imageUrl: '/img/team/alain.png',
          color: '#FFE15E',
          name: 'Alain',
          title: 'Founder & Co-President',
          social: {
            linkedin: 'alainchuard',
            twitter: 'AlainChuard',
          },
        },
        {
          imageUrl: '/img/team/cabe.png',
          color: '#6DDF77',
          name: 'Juan',
          title: 'Software Engineer',
          social: {
            linkedin: 'juanignaciolarrambebere',
          },
        },
        {
          imageUrl: '/img/team/dominique.png',
          color: '#FFE15E',
          name: 'Dominique',
          title: 'Product Lead',
          social: {
            linkedin: 'dominique-kunz',
          },
        },
        {
          imageUrl: '/img/team/javi.png',
          color: '#FFD480',
          name: 'Javi',
          title: 'Software Engineer',
          social: {
            linkedin: 'javierm42',
          },
        },
        {
          imageUrl: '/img/team/diegol.png',
          color: '#85CEFF',
          name: 'Diego',
          title: 'Software Engineer',
          social: {
            linkedin: 'acostami',
            twitter: 'acostami',
          },
        },
        {
          imageUrl: '/img/team/fede.png',
          color: '#6FD8D6',
          name: 'Fede',
          title: 'Software Engineer',
          social: {
            linkedin: 'federico-kauffman',
            twitter: 'fedekauffman',
          },
        },
        {
          imageUrl: '/img/team/larry.png',
          color: '#85CEFF',
          name: 'Fabián',
          title: 'Software Engineer',
          social: {
            linkedin: 'fabián-larrañaga',
            twitter: 'FLarraa',
          },
        },
        {
          imageUrl: '/img/team/dominik.png',
          color: '#F5B981',
          name: 'Dominik',
          title: 'Product Designer',
          social: {
            linkedin: 'dominik-kandrav%C3%BD-7485b9190',
            twitter: 'kndrv_dot',
          },
        },
        {
          imageUrl: '/img/team/martin.png',
          color: '#B38FFF',
          name: 'Martín',
          title: 'Software Engineer',
          social: {
            linkedin: 'feldman22',
          },
        },
        {
          imageUrl: '/img/team/leti.png',
          color: '#DB9CFC',
          name: 'Leti',
          title: 'Software Engineer',
          social: {
            linkedin: 'leticia-errandonea',
          },
        },
      ].map((person) => (
        <li
          className="w-full space-y-6 h-fit sm:even:translate-y-1/2 md:even:translate-y-0 lg:even:translate-y-20 group"
          key={person.name}
        >
          <div
            className="relative mx-auto w-[271px] max-w-[90%] aspect-square rounded-[72px] shadow overflow-clip"
            style={{ background: person.color }}
          >
            <Image src={person.imageUrl} layout="fill" alt={person.name} />
          </div>
          <div className="space-y-2">
            <h3 className="text-center transition-transform text-display-sm text-on-surface">
              {person.name}
            </h3>
            <div className="grid grid-cols-1 h-fit">
              <p className="col-start-1 row-start-1 text-center transition-transform text-body text-outline">
                {person.title}
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <a
                href={`https://www.linkedin.com/in/${person.social.linkedin}/`}
                className="relative flex items-center justify-center flex-shrink-0 w-12 h-12 overflow-hidden transition-colors border rounded-full border-outline/15 hover:text-surface"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100 -z-1"
                  style={{ background: person.color }}
                />
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-10 pointer-events-none"
                  aria-label={`${person.name}'s LinkedIn profile`}
                >
                  <path d="M6.69604 4.02895C6.69604 5.14974 5.76077 6.0579 4.60644 6.0579C3.45211 6.0579 2.51685 5.14974 2.51685 4.02895C2.51685 2.90897 3.45211 2 4.60644 2C5.76077 2 6.69604 2.90897 6.69604 4.02895ZM6.71289 7.68105H2.5V20.6663H6.71289V7.68105ZM13.4383 7.68105H9.25242V20.6663H13.4392V13.8499C13.4392 10.0598 18.5191 9.74977 18.5191 13.8499V20.6663H22.7218V12.4442C22.7218 6.04897 15.2044 6.28189 13.4383 9.43001V7.68105Z" />
                </svg>
              </a>
              {person.social.twitter && (
                <a
                  href={`https://twitter.com/${person.social.twitter}`}
                  className="relative flex items-center justify-center flex-shrink-0 w-12 h-12 overflow-hidden transition-colors border rounded-full border-outline/15 hover:text-surface"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="absolute inset-0 transition-opacity opacity-0 hover:opacity-80 -z-1"
                    style={{ background: person.color }}
                  />
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-10 pointer-events-none"
                    aria-label={`${person.name}'s Twitter profile`}
                  >
                    <path d="M8.85937 21.1108C16.4903 21.1108 20.6641 14.5272 20.6641 8.81802C20.6641 8.63103 20.6641 8.44488 20.6519 8.25957C21.4639 7.64797 22.1648 6.8907 22.7219 6.02322C21.9646 6.37261 21.1614 6.60175 20.3389 6.70297C21.205 6.16303 21.8532 5.3138 22.1629 4.31332C21.3485 4.81656 20.4575 5.17123 19.5284 5.362C18.2424 3.93797 16.1989 3.58944 14.5438 4.51183C12.8887 5.43423 12.0336 7.39815 12.458 9.30236C9.12217 9.12821 6.01414 7.48744 3.90744 4.78838C2.80626 6.76247 3.36872 9.28792 5.19193 10.5557C4.53168 10.5353 3.88583 10.3499 3.30887 10.015C3.30887 10.0326 3.30887 10.0512 3.30887 10.0697C3.30942 12.1263 4.70156 13.8976 6.63739 14.3049C6.02659 14.4783 5.38572 14.5037 4.76404 14.379C5.30756 16.139 6.86515 17.3446 8.64016 17.3793C7.17103 18.5817 5.35618 19.2344 3.48763 19.2324C3.15753 19.2318 2.82776 19.211 2.5 19.1701C4.39732 20.438 6.60497 21.1106 8.85937 21.1074" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeamSection;
