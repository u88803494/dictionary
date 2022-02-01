import Head from 'next/head';
import { ReactNode } from 'react';

import Navbar from './navbar';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Head>
        <title>Dictionary</title>
        <meta name="description" content="A dictionary to those misunderstood chinese word" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-screen min-h-screen pt-16 px-6">
        <main className="w-screen-xl max-w-screen-xl mx-auto">{children}</main>
      </div>
    </>
  );
};

export default Layout;
