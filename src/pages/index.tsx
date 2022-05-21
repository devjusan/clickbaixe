import type { NextPage } from 'next';
import { StyledMain } from '../styles/global';
import Head from 'next/head';
import Header from '../components/core/header';
import Footer from '../components/core/footer';
import Post from '../components/ui/post';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clickbaixe </title>
        <meta name="description" content="Site para download de conteúdos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StyledMain>
        <Post />
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;
