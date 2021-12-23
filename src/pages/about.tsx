import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/navbar/Navbar';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dictionary</title>
        <meta name="description" content="A dictionary to those misunderstood chinese word" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </>
  );
};

export default About;
