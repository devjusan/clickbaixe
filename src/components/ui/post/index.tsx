import { NextComponentType } from 'next';
import { StyledArticle, StyledImageContainer, StyledLine } from './styled';
import { StyledSubtitle, StyleTitle } from '@//styles/global';

import Image from 'next/image';
import img from '../../../assets/img.svg';
const Post: NextComponentType = () => {
  return (
    <StyledArticle>
      <StyledImageContainer>
        <Image priority={false} src={img} alt="Imagem do post" />
      </StyledImageContainer>
      <StyleTitle type={{ '@initial': 'title', '@sm': 'mobile' }}>
        A few words about this blog platform, Ghost, and how this site was made
      </StyleTitle>
      <StyledSubtitle css={{ position: 'relative' }} type={'articleTitle'}>
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
      </StyledSubtitle>{' '}
      <StyledLine />
    </StyledArticle>
  );
};

export default Post;
