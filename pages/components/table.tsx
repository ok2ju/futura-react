import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DocTitle from '../../components/DocTitle';
import { Heading, HEADING_SIZES, Text } from '../../components/Typography';
import DocCodeBlock from '../../components/DocCodeBlock';
import ExampleArea from '../../components/ExampleArea';
import TableExample from '../../uikit/table/story/example';
import PropsTable from '../../components/PropsTable';
import { code, anatomy } from '../../uikit/table/story/code';
import {
  tableBodyProps,
  tableCellProps,
  tableHeadCellProps,
  tableHeadProps,
  tableHeadRowProps,
  tableProps,
  tableRowProps,
} from '../../uikit/table/story/infoProps';

const ButtonDoc: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Futura: Table</title>
        <meta name="component" content="Table component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DocTitle
          title="Table"
          description="Tables are complex collection components that are built up from many child elements including columns, rows, and cells."
        />
        <ExampleArea code={code}>
          <div className="bg-slate-50 p-4">
            <TableExample />
          </div>
        </ExampleArea>
        <Text>
          Note: This example was build using `react-table (v7)` package.
        </Text>

        <Heading anchor="install">Anatomy</Heading>
        <Text>Import all parts and piece them together.</Text>
        <DocCodeBlock code={anatomy} language="jsx" />

        <Heading anchor="api">API Reference</Heading>

        <Heading anchor="root" size={HEADING_SIZES.md}>
          Table
        </Heading>
        <Text>Contains all the parts of an table.</Text>
        <PropsTable data={tableProps} />

        <Heading anchor="item" size={HEADING_SIZES.md}>
          TableHead
        </Heading>
        <Text>Contains all the parts of a table header.</Text>
        <PropsTable data={tableHeadProps} />

        <Heading anchor="header" size={HEADING_SIZES.md}>
          TableHeadRow
        </Heading>
        <Text>Wraps an table header cells.</Text>
        <PropsTable data={tableHeadRowProps} />

        <Heading anchor="content" size={HEADING_SIZES.md}>
          TableHeadCell
        </Heading>
        <Text>Table header cell definition.</Text>
        <PropsTable data={tableHeadCellProps} />

        <Heading anchor="content" size={HEADING_SIZES.md}>
          TableBody
        </Heading>
        <Text>Contains table rows.</Text>
        <PropsTable data={tableBodyProps} />

        <Heading anchor="content" size={HEADING_SIZES.md}>
          TableRow
        </Heading>
        <Text>Contains table cells.</Text>
        <PropsTable data={tableRowProps} />

        <Heading anchor="content" size={HEADING_SIZES.md}>
          TableCell
        </Heading>
        <Text>Table cell definition.</Text>
        <PropsTable data={tableCellProps} />
      </div>
    </Fragment>
  );
};

export default ButtonDoc;
