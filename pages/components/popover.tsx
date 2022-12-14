import { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DocTitle from '../../components/DocTitle';
import ExampleArea from '../../components/ExampleArea';
import PopoverExample from '../../uikit/popover/story/example';

const PopoverDoc: NextPage = () => {
  const [boundaryRef, setBoundaryRef] = useState<HTMLDivElement | null>(null);

  return (
    <Fragment>
      <Head>
        <title>Futura: Popover</title>
        <meta name="component" content="Popover component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DocTitle
          title="Popover"
          description="Displays rich content in a portal, triggered by a button."
        />
        <ExampleArea>
          <div
            ref={(node) => {
              setBoundaryRef(node);
            }}
            className="w-[500px] flex items-center justify-center"
          >
            <PopoverExample boundary={boundaryRef} />
          </div>
        </ExampleArea>
      </div>
    </Fragment>
  );
};

export default PopoverDoc;
