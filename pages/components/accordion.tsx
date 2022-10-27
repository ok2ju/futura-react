import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DocTitle from '../../components/DocTitle';
import { Heading, HEADING_SIZES, Text } from '../../components/Typography';
import ExampleArea from '../../components/ExampleArea';
import DocCodeBlock from '../../components/DocCodeBlock';
import AccordionExample from '../../uikit/accordion/story/example';
import PropsTable from '../../components/PropsTable';
import { code, anatomy } from '../../uikit/accordion/story/code';
import {
  rootProps,
  itemProps,
  headerProps,
  contentProps,
} from '../../uikit/accordion/story/propsInfo';

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

        <Heading anchor="anatomy">Anatomy</Heading>
        <Text>Import all parts and piece them together.</Text>
        <DocCodeBlock code={anatomy} language="jsx" />

        <Heading anchor="api">API Reference</Heading>

        <Heading anchor="root" size={HEADING_SIZES.md}>
          Root
        </Heading>
        <Text>Contains all the parts of an accordion.</Text>
        <PropsTable data={rootProps} />

        <Heading anchor="item" size={HEADING_SIZES.md}>
          Item
        </Heading>
        <Text>Contains all the parts of a collapsible section.</Text>
        <PropsTable data={itemProps} />

        <Heading anchor="header" size={HEADING_SIZES.md}>
          Header
        </Heading>
        <Text>Wraps an `Accordion.Trigger`.</Text>
        <PropsTable data={headerProps} />

        <Heading anchor="content" size={HEADING_SIZES.md}>
          Content
        </Heading>
        <Text>Contains the collapsible content for an item.</Text>
        <PropsTable data={contentProps} />
      </div>
    </Fragment>
  );
};

export default AccordionDoc;
