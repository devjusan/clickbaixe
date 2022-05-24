import { StyledTitle } from '@//styles/global';
import { StyledContainer, StyledContainerList } from './styled';
import Article from './article';

interface IArticlesList {
  posts: {
    title: string;
    subtitle: string;
    slug: string;
    image: {
      url: string;
    };
  }[];
  hideTitle?: boolean;
  fromCategory?: boolean;
}

const ArticlesList = ({ posts, hideTitle, fromCategory }: IArticlesList) => {
  return (
    <StyledContainer>
      {!hideTitle && (
        <StyledTitle
          css={{ fontSize: '35px', marginBottom: '$44' }}
          type="title"
        >
          Últimos posts
        </StyledTitle>
      )}

      <StyledContainerList>
        {[...posts].map((post) => (
          <Article
            fromCategory={fromCategory}
            slug={post.slug}
            image={post.image}
            title={post.title}
            key={post.slug}
          />
        ))}
      </StyledContainerList>
    </StyledContainer>
  );
};

export default ArticlesList;
