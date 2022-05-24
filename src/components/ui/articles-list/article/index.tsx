import { StyledSubtitle } from '@//styles/global';
import { StyledContainer } from './styled';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface IArticle {
  title: string;
  slug: string;
  image: {
    url: string;
  };
  category?: string;
}

const Article = ({ title, image, slug }: IArticle) => {
  const { push } = useRouter();
  const handleClick = (event: any) => {
    event.preventDefault();
    push(`posts/${slug}`);
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
      <StyledSubtitle type={'articleTitle'} css={{ fontWeight: 'bold' }}>
        {title}
      </StyledSubtitle>
    </StyledContainer>
  );
};

export default Article;
