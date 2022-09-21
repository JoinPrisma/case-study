import type { NextPage } from 'next';
import Head from 'next/head';
import FeedbackCarousel from '../components/FeedbackCarousel';
import Heading from '../components/Heading';
import Hero from '../components/hero/Hero';
import LinksCarousel from '../components/LinksCarousel';
import Paragraph from '../components/Paragraph';
import TeamSection from '../components/TeamSection';
import Videos from '../components/video-section/Videos';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta lang="en" />
        <title>Prisma LIVE Case Study</title>
        <meta name="description" content="Prisma LIVE" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/favicons/safari-pinned-tab.svg"
          color="#59c161"
        />
        <link rel="shortcut icon" href="/img/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#58c060" />
        <meta
          name="msapplication-config"
          content="/img/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#59c161" />
      </Head>

      <div className="overflow-x-clip">
        <Hero />
        <main className="px-2 md:px-6 pt-20 sm:pt-40 mx-auto max-w-[1392px]">
          <Heading
            text="A live learning experience - delightful for kids, powerful for teachers"
            color="yellow"
          />
          <Paragraph text="Prisma LIVE is the custom live learning platform for the Prisma online school. It has been conceived as a strategic bet to differentiate Prisma’s online school offering and make it highly scalable while maintaining teacher quality and learner delight." />
          <FeedbackCarousel />
          <Videos />
          <LinksCarousel />

          <Heading text="The people who built it 🚀" color="purple" />
          <Paragraph text="Prisma LIVE was built by a team spanning half the globe, from the Czech Republic to Uruguay. Together, we often made the impossible happen and always had fun while doing it." />
          <TeamSection />
        </main>

        <footer className="border-t border-outline/15 px-2 md:px-6 mx-auto max-w-[1392px]">
          <div className="py-10 tracking-wide text-outline text-body-sm">
            © 2022 Prisma. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
