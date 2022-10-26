import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DocTitle from '../../components/DocTitle';
import DocSection from '../../components/DocSection';
import ExampleArea from '../../components/ExampleArea';
import DocCodeBlock from '../../components/DocCodeBlock';
import { Button, SIZE, TYPE } from '../../uikit/button';

const ButtonDoc: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Futura: Button</title>
        <meta name="component" content="Button component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DocTitle
          title="Button"
          description="The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages."
        />
        <ExampleArea>
          <div className="mx-1">
            <Button title="Button" type={TYPE.secondary} size={SIZE.small} />
          </div>
          <div className="mx-1">
            <Button title="Button" disabled />
          </div>
          <div className="mx-1">
            <Button title="Button" size={SIZE.default} />
          </div>
          <div className="mx-1">
            <Button title="Button" size={SIZE.medium} />
          </div>
          <div className="mx-1">
            <Button title="Button" type={TYPE.danger} size={SIZE.big} />
          </div>
        </ExampleArea>
        <DocSection
          anchor="install"
          title="Installation"
          description="Install the component from your command line."
        />
        <DocCodeBlock code={`npm install futura-react`} language="bash" />
      </div>
    </Fragment>
  );
};

export default ButtonDoc;
