import { StyledTitle } from '@//styles/global';
import { NextComponentType } from 'next';
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
}

const ArticlesList = ({ posts }: IArticlesList) => {
  const list = [
    { title: 'Here are some things you should know regarding how we work' },
    {
      title:
        'Granny gives everyone the finger, and other tips from OFFF Barcelona',
    },
    {
      title: 'Hello world, or, in other words, why this blog exists',
    },
    {
      title:
        'Here areasdasd asdasd some things you should know regarding how we work',
    },
    {
      title: 'Connecting artificial intelligence with digital product design',
    },
    {
      title: 'It’s all about finding the perfect balance',
    },
  ];

  return (
    <StyledContainer>
      <StyledTitle css={{ fontSize: '35px', marginBottom: '$44' }} type="title">
        Últimos posts
      </StyledTitle>
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
};

export default ArticlesList;
