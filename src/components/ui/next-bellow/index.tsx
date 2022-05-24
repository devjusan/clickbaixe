import { StyledTitle } from '../../../styles/global';
import Article from '../articles-list/article';
import { StyledContainer, StyledContainerList } from './styled';

interface IArticlesList {
  posts: {
    title: string;
    subtitle: string;
    slug: string;
    image: {
      url: string;
    };
  }[];
}

const NextBelow = ({ posts }: IArticlesList) => (
  <StyledContainer>
    <StyledTitle>O que ver depois</StyledTitle>
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

export default NextBelow;
