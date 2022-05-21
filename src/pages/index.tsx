import type { NextPage } from 'next';
import { StyledMain } from '../styles/global';
import Head from 'next/head';
import Header from '../components/core/header';

const Home: NextPage = () => {
  return (
    <>
      {' '}
      <Head>
        <title>Clickbaixe </title>
        <meta name="description" content="Site para download de conteúdos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StyledMain></StyledMain>
    </>
  );
};

export default Home;
