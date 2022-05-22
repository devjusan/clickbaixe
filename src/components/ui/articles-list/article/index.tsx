import { StyledSubtitle } from '@//styles/global';
import Image from 'next/image';
import { StyledContainer } from './styled';
import Img from '../../../../assets/img.svg';
import { useRouter } from 'next/router';

interface IArticle {
  title: string;
  slug: string;
  image: {
    url: string;
  };
}

const Article = ({ title, image, slug }: IArticle) => {
  const { push } = useRouter();
  const handleClick = () => {
    push(slug);
  };

  return (
    <StyledContainer onClick={handleClick}>
      <Image
        src={image.url}
        width={300}
        height={176}
        priority
        alt="Uma postagem"
      />
      <StyledSubtitle type={'articleTitle'}>{title}</StyledSubtitle>
    </StyledContainer>
  );
};

export default Article;
