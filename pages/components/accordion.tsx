import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DocTitle from '../../components/DocTitle';
import DocSection from '../../components/DocSection';
import ExampleArea from '../../components/ExampleArea';
import DocCodeBlock from '../../components/DocCodeBlock';
import AccordionExample from '../../uikit/accordion/story/example';
import Text from '../../components/Text';
import { code } from '../../uikit/accordion/story/code';

const AccordionDoc: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Futura: Accordion</title>
        <meta name="component" content="Accordion component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DocTitle
          title="Accordion"
          description="A vertically stacked set of interactive headings that each reveal an associated section of content."
        />
        <ExampleArea code={code}>
          <div className="w-[500px]">
            <AccordionExample />
          </div>
        </ExampleArea>
        <DocSection
          anchor="install"
          title="Installation"
          description="Install the component from your command line."
        />
        <DocCodeBlock code={`npm install futura-react`} language="bash" />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
    </Fragment>
  );
};

export default AccordionDoc;
