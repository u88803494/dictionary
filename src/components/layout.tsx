import Head from 'next/head';
import { FC } from 'react';

import Navbar from './navbar';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dictionary</title>
        <meta
          name="description"
          content="A dictionary to those misunderstood chinese word"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
