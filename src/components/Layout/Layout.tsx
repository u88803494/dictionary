import Head from 'next/head';
import { ReactNode } from 'react';

import Navbar from '../Navbar';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <Head>
        <title>Dictionary</title>
        <meta name="description" content="A dictionary to those misunderstood chinese word" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="min-h-screen w-screen bg-slate-800 py-20 text-gray-100 sm:px-6">
        <main className="w-screen-xl mx-auto max-w-screen-xl">{children}</main>
      </div>
    </>
  );
};

export default Layout;
