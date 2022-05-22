import { StyledSubtitle, StyleTitle } from '@//styles/global';
import { StyledContainer } from './styles';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import img from '../../assets/img.svg';

interface IPost {
  title: string;
  subtitle: string;
  image: string;
  content: string;
  updatedAt: string;
}

const Post: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts / CLICKBAIXE</title>
      </Head>
      <StyledContainer>
        <StyleTitle
          css={{ marginBottom: '$44' }}
          type={{ '@initial': 'title', '@sm': 'mobile' }}
        >
          A few words about this blog platform, Ghost, and how this site was
          made
        </StyleTitle>
        <StyledSubtitle css={{ position: 'relative' }} type={'articleTitle'}>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </StyledSubtitle>
        <Image priority={false} src={img} alt="Imagem do post" />
      </StyledContainer>
    </>
  );
};

export default Post;
