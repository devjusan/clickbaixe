import {
  StyledContainer,
  StyledCategory,
  StyledLeftContainer,
  StyledRightContainer,
} from './styles';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { StyledSubtitle } from '@//styles/global';
import { GetServerSideProps } from 'next';
import { createClient } from 'prismic.config';
import { formatPrismicPosts } from '@//utils/prismic.utils';
import { getSlugFromParam, split } from '@//utils/formatter.utils';
import Head from 'next/head';
import SocialMedias from '@//components/ui/social-medias';
import ArticlesList from '@//components/ui/articles-list';

interface ICategories {
  posts: {
    title: string;
    subtitle: string;
    slug: string;
    image: {
      url: string;
    };
  }[];
}

const Categories = ({ posts }: ICategories) => {
  const { asPath } = useRouter();
  const category = useCallback(() => {
    return split(asPath);
  }, [asPath]);

  return (
    <>
      <Head>
        <title>{category()} | CLICKBAIXE </title>
        <meta
          name="description"
          content="CLICKBAIXE | Download de Jogos, Programas e Apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledContainer>
        <StyledLeftContainer>
          {' '}
          <StyledCategory>
            <span>TUDO SOBRE</span>
            <StyledSubtitle
              css={{
                textAlign: 'start',
                paddingLeft: '0',
                fontWeight: '700',
                fontSize: '$52',
                fontFamily: '$logo',
              }}
            >
              {category()}
            </StyledSubtitle>
          </StyledCategory>
          <ArticlesList hideTitle posts={posts}></ArticlesList>
        </StyledLeftContainer>
        <StyledRightContainer>
          <SocialMedias />
        </StyledRightContainer>
      </StyledContainer>
    </>
  );
};

export default Categories;

export const getServerSideProps: GetServerSideProps = async ({
  previewData,
  params,
}) => {
  const slug = getSlugFromParam(params);
  const prismicClient = createClient({ previewData });
  const prismicData = await prismicClient.getAllBySomeTags([slug]);
  const posts = formatPrismicPosts(prismicData);

  return { props: { posts } };
};
