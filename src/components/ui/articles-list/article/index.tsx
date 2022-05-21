import { StyledSubtitle } from '@//styles/global';
import Image from 'next/image';
import { StyledContainer } from './styled';
import Img from '../../../../assets/img.svg';

interface IArticle {
  title: string;
}

const Article = ({ title }: IArticle) => {
  return (
    <StyledContainer>
      <Image
        src={Img}
        width={300}
        height={176}
        priority={false}
        alt="Uma postagem"
      />
      <StyledSubtitle type={'articleTitle'}>{title}</StyledSubtitle>
    </StyledContainer>
  );
};

export default Article;
