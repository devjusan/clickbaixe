import type { NextPage } from 'next';
import Head from 'next/head';
import { Title } from '../styles/global';

const Home: NextPage = () => {
  return (
    <>
      {' '}
      <Head>
        <title>Clickbaixe </title>
        <meta name="description" content="Site para download de conteúdos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title type="logo">NORDIC ROSE</Title>
    </>
  );
};

export default Home;
