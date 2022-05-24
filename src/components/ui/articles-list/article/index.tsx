import { StyledSubtitle } from '@//styles/global';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { StyledContainer } from './styled';

interface IArticle {
  title: string;
  slug: string;
  image: {
    url: string;
  };
}

const Article = ({ title, image, slug }: IArticle) => {
  const { push } = useRouter();
  const handleClick = (event: any) => {
    event.preventDefault();

    push(`posts/${slug}`);
  };

  return (
    <StyledContainer>
      <Image
        src={image.url}
        width={300}
        height={176}
        priority
        alt="Uma postagem"
        onClick={handleClick}
        style={{ cursor: `pointer` }}
        className="img-zoom"
      />
      <StyledSubtitle type="articleTitle" css={{ fontWeight: `bold` }}>
        {title}
      </StyledSubtitle>
    </StyledContainer>
  );
};

export default Article;
