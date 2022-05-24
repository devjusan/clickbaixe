import { StyledContainer, StyledContainerList } from './styled';
import Article from './article';
import { StyledTitle } from '../../../styles/global';

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
}

const ArticlesList = ({ posts, hideTitle }: IArticlesList) => (
  <StyledContainer>
    {!hideTitle && (
      <StyledTitle css={{ fontSize: `35px`, marginBottom: `$44` }} type="title">
        Últimos posts
      </StyledTitle>
    )}

    <StyledContainerList>
      {[...posts].map((post) => (
        <Article
          slug={post.slug}
          image={post.image}
          title={post.title}
          key={post.slug}
        />
      ))}
    </StyledContainerList>
  </StyledContainer>
);

export default ArticlesList;
