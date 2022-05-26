import Image from 'next/image';
import Head from 'next/head';
import DOMPurify from 'isomorphic-dompurify';
import { RichText } from 'prismic-dom';
import { useCallback } from 'react';
import { GetServerSideProps } from 'next';
import {
  StyledContainer,
  StyledContent,
  StyledLine,
} from '../../../pages-styles/category-posts-styled';
import { StyledTitle, StyledSubtitle } from '../../../styles/global';
import NextBelow from '../../../components/ui/next-bellow';
import { formatDate, getSlugFromParam } from '../../../utils/formatter.utils';
import { createClient } from '../../../../prismic.config';
import { formatPrismicPosts } from '../../../utils/prismic.utils';
import DownloadButton from '../../../components/ui/download-button';
import Contribute from '../../../components/ui/contribute';

interface IPost {
  post: {
    slug: string;
    title: string;
    subtitle: string;
    content: string;
    updatedAt: string;
    href: string;
    register: string | null;
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

const Post = ({
  post: { title, subtitle, image, content, href, updatedAt, register },
  posts,
}: IPost) => {
  const sanitizedContent = useCallback(
    () => DOMPurify.sanitize(content),
    [content],
  );

  return (
    <>
      <Head>
        <title>{title} / CLICKBAIXE</title>
      </Head>
      <StyledContainer>
        <StyledTitle
          css={{ marginBottom: `$44` }}
          type={{ '@initial': `title`, '@sm': `mobile` }}
        >
          {title}
        </StyledTitle>
        <StyledSubtitle css={{ position: `relative` }} type="articleTitle">
          {subtitle}
        </StyledSubtitle>
        <time>{updatedAt}</time>
        <Image
          style={{ borderRadius: `10px` }}
          priority={false}
          width={700}
          height={350}
          src={image.url}
          alt="Imagem do post"
        />
        <StyledContent
          dangerouslySetInnerHTML={{ __html: sanitizedContent() }}
        />
        <DownloadButton registerHref={register} href={href} />
        <StyledSubtitle css={{ textAlign: 'start' }}>
          Apoie o desenvolvedor. Compre o programa!
        </StyledSubtitle>
        <Contribute />
        <StyledLine />
        <NextBelow posts={posts} />
      </StyledContainer>
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  previewData,
}) => {
  const slug = getSlugFromParam(params);
  const prismiClient = createClient({ previewData });
  const prismicData = await prismiClient.getByUID(`posts`, slug);
  const posts = await prismiClient.getAllByType(`posts`);
  const mapPosts = formatPrismicPosts(posts);
  const sortedPosts = mapPosts.sort().splice(0, 12);

  const post = {
    slug,
    title: RichText.asText(prismicData.data.title),
    subtitle: RichText.asText(prismicData.data.subtitle),
    content: RichText.asHtml(prismicData.data.content),
    href: RichText.asText(prismicData.data.href),
    register: RichText.asText(prismicData.data.register),
    updatedAt: formatDate(prismicData.first_publication_date),
    image: {
      url: prismicData.data.image.url,
    },
  };

  return { props: { post, posts: sortedPosts } };
};
