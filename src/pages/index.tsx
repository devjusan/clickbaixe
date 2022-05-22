import { GetStaticProps } from 'next';
import { StyledMain } from '../styles/global';
import ArticleList from '../components/ui/articles-list';
import { createClient } from 'prismic.config';
import { RichText } from 'prismic-dom';
import Head from 'next/head';
import Post from '../components/ui/post';

interface IPost {
  post: {
    slug: string;
    title: string;
    subtitle: string;
    image: {
      url: string;
    };
  };
}

const Home = ({ post }: IPost) => {
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
        <ArticleList />
      </StyledMain>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const ONE_HOUR = 60 * 30;
  const manualSlug = 'coreldraw-2022-completo';
  const prismiClient = createClient({ previewData });
  const prismicData = await prismiClient.getByUID('posts', manualSlug);

  const post = {
    slug: manualSlug,
    title: RichText.asText(prismicData.data.title),
    subtitle: RichText.asText(prismicData.data.subtitle),
    image: {
      url: prismicData.data.image.url,
    },
  };

  return { props: { post }, revalidate: ONE_HOUR };
};
