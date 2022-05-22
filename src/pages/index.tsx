import { GetStaticProps } from 'next';
import { StyledMain } from '../styles/global';
import { createClient } from 'prismic.config';
import { formatPrismicPosts } from '../utils/prismic.utils';
import { RichText } from 'prismic-dom';
import ArticleList from '../components/ui/articles-list';
import Head from 'next/head';
import Post from '../components/ui/post';
import { FAVORITE_SLUG } from '../constants/favorite-slug';

interface IPost {
  post: {
    slug: string;
    title: string;
    subtitle: string;
    image: {
      url: string;
    };
  };
  posts: {
    title: string;
    subtitle: string;
    slug: string;
    image: {
      url: string;
    };
  }[];
}

const Home = ({ post, posts }: IPost) => {
  return (
    <>
      <Head>
        <title>Clickbaixe </title>
        <meta
          name="description"
          content="CLICKBAIXE | Download de Jogos, Programas e Apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <Post post={post} />
        <ArticleList posts={posts} />
      </StyledMain>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const ONE_HOUR = 60 * 30;
  const prismiClient = createClient({ previewData });
  const prismicData = await prismiClient.getByUID('posts', FAVORITE_SLUG);
  const posts = await prismiClient.getAllByType('posts', { limit: 12 });

  const mapPosts = formatPrismicPosts(posts);

  const post = {
    slug: FAVORITE_SLUG,
    title: RichText.asText(prismicData.data.title),
    subtitle: RichText.asText(prismicData.data.subtitle),
    image: {
      url: prismicData.data.image.url,
    },
  };

  return { props: { post, posts: mapPosts }, revalidate: ONE_HOUR };
};
