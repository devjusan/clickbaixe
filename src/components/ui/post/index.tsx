import { StyledArticle, StyledImageContainer, StyledLine } from './styled';
import { StyledSubtitle, StyledTitle } from '@//styles/global';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IPost {
  post: {
    slug: string;
    title: string;
    subtitle: string;
    image: {
      url: string;
    };
    updatedAt: string;
  };
}

const Post = ({ post: { image, slug, subtitle, title } }: IPost) => {
  const { push } = useRouter();
  const handleClick = () => {
    push(`/posts/${slug}`);
  };

  return (
    <StyledArticle>
      <StyledImageContainer>
        <Image
          style={{ borderRadius: '10px' }}
          priority={false}
          width={700}
          height={350}
          src={image.url}
          alt="Imagem do post"
          onClick={handleClick}
          className="img-zoom"
        />
        <time></time>
      </StyledImageContainer>
      <StyledTitle
        css={{ marginBottom: '$44' }}
        type={{ '@initial': 'title', '@sm': 'mobile' }}
      >
        {title}
      </StyledTitle>
      <StyledSubtitle css={{ position: 'relative' }} type={'articleTitle'}>
        {subtitle}
      </StyledSubtitle>{' '}
      <StyledLine />
    </StyledArticle>
  );
};

export default Post;
