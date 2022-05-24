import { useRouter } from 'next/router';
import Image from 'next/image';
import { StyledContainer } from './styled';
import { StyledSubtitle } from '../../../../styles/global';

interface IArticle {
  title: string;
  slug: string;
  image: {
    url: string;
  };
  fromCategory?: boolean;
}

const Article = ({ title, image, slug, fromCategory }: IArticle) => {
  const { push } = useRouter();
  const handleClick = (event: any) => {
    event.preventDefault();

    if (fromCategory) {
      push(`${slug}`);
      return;
    }

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
