import Head from 'next/head';

import { MainThemes } from '@/themes/MainThemes';

import MainView from '@/views/MainView';
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Wilson</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainThemes.Background>
        <MainView />
      </MainThemes.Background>
    </>
  );
}
