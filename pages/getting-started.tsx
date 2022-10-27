import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DocTitle from '../components/DocTitle';
import { Heading, HEADING_SIZES, Text } from '../components/Typography';
import DocCodeBlock from '../components/DocCodeBlock';

const GettingStarted: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Futura: Getting Started</title>
        <meta name="description" content="Futura getting started page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DocTitle
          title="Getting started"
          description="A quick tutorial to get you up and running with Futura UI Toolkit."
        />

        <Heading anchor="install">Installation</Heading>

        <Heading anchor="install-package" size={HEADING_SIZES.sm}>
          1. Install library
        </Heading>
        <Text>Install the futura library from your command line.</Text>
        <DocCodeBlock code={`npm install @futura-react`} language="bash" />

        <Heading anchor="styles" size={HEADING_SIZES.sm}>
          2. Add library styles
        </Heading>
        <Text>
          In order to use components you need to add library styles to your
          application. There are two ways to do it.
        </Text>
        <Text>1. Import library `styles.css` file</Text>
        <Text>
          2. Install `tailwindcss` and configure it to point on `@futura-react`
          lib.
        </Text>
      </div>
    </Fragment>
  );
};

export default GettingStarted;
