import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DocTitle from '../components/DocTitle';

const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Futura: About</title>
        <meta name="description" content="Futura about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DocTitle
          title="About"
          description="An open-source UI component library for building high-quality, accessible design systems and web apps."
        />
      </div>
    </Fragment>
  );
};

export default About;
