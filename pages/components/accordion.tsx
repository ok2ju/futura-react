import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DocTitle from '../../components/DocTitle';
import DocSection from '../../components/DocSection';
import Accordion from '../../uikit/accordion';
import ExampleArea from '../../components/ExampleArea';

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
        <ExampleArea>
          <div className="w-[500px]">
            <Accordion />
          </div>
        </ExampleArea>
        <DocSection
          anchor="install"
          title="Installation"
          description="Install the component from your command line."
        />
      </div>
    </Fragment>
  );
};

export default AccordionDoc;
