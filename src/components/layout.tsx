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
      <div className="min-h-screen w-screen px-6 pt-16">
        <main className="w-screen-xl mx-auto max-w-screen-xl">{children}</main>
      </div>
    </>
  );
};

export default Layout;
