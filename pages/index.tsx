import type { NextPage } from 'next';
import Head from 'next/head';
import Accordion from '../packages/react/accordion/src';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[500px] px-4 py-4">
        <Accordion />
      </div>
    </div>
  );
};

export default Home;