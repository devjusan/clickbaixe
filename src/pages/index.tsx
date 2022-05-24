import { GetStaticProps } from 'next';
import { createClient } from 'prismic.config';
import { RichText } from 'prismic-dom';
import Head from 'next/head';
import { StyledMain } from '../styles/global';
import { formatPrismicPosts } from '../utils/prismic.utils';
import ArticleList from '../components/ui/articles-list';
import Post from '../components/ui/post';
import { FAVORITE_SLUG } from '../constants/favorite-slug';
import { formatDate } from '../utils/formatter.utils';

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
  posts: {
    title: string;
    subtitle: string;
    slug: string;
    image: {
      url: string;
    };
  }[];
}

const Home = ({ post, posts }: IPost) => (
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
      <ArticleList hideTitle posts={posts} />
    </StyledMain>
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const ONE_HOUR = 60 * 30;
  const prismiClient = createClient({ previewData });
  const { results } = await prismiClient.getByType(`favorite-slug`);
  const { uid: slug } = results[0];

  const prismicData = await prismiClient.getByUID(
    `posts`,
    slug?.toString() ?? FAVORITE_SLUG,
  );
  const posts = await prismiClient.getAllByType(`posts`, { limit: 12 });
  const mapPosts = formatPrismicPosts(posts);

  const post = {
    slug: slug ?? FAVORITE_SLUG,
    title: RichText.asText(prismicData.data.title),
    subtitle: RichText.asText(prismicData.data.subtitle),
    image: {
      url: prismicData.data.image.url,
    },
    updatedAt: formatDate(prismicData.last_publication_date),
  };

  return { props: { post, posts: mapPosts }, revalidate: ONE_HOUR };
};
