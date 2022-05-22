import { StyledSubtitle, StyledTitle } from '@//styles/global';
import { StyledContainer, StyledContent } from './styles';
import { GetServerSideProps } from 'next';
import { createClient } from 'prismic.config';
import { RichText } from 'prismic-dom';
import { useCallback } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Head from 'next/head';
import Image from 'next/image';

interface IPost {
  post: {
    slug: string;
    title: string;
    subtitle: string;
    content: string;
    updatedAt: string;
    image: {
      url: string;
    };
  };
}

const Post = ({
  post: { title, subtitle, image, slug, content, updatedAt },
}: IPost) => {
  const sanitizedContent = useCallback(() => {
    return DOMPurify.sanitize(content);
  }, [content]);

  return (
    <>
      <Head>
        <title>Posts / CLICKBAIXE</title>
      </Head>
      <StyledContainer>
        <StyledTitle
          css={{ marginBottom: '$44' }}
          type={{ '@initial': 'title', '@sm': 'mobile' }}
        >
          {title}
        </StyledTitle>
        <StyledSubtitle css={{ position: 'relative' }} type={'articleTitle'}>
          {subtitle}
        </StyledSubtitle>
        <Image
          style={{ borderRadius: '10px' }}
          priority={false}
          width={700}
          height={350}
          src={image.url}
          alt="Imagem do post"
        />
        <StyledContent
          dangerouslySetInnerHTML={{ __html: sanitizedContent() }}
        ></StyledContent>
      </StyledContainer>
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  previewData,
}) => {
  const slug = params?.slug?.toString();
  const prismiClient = createClient({ previewData });
  const prismicData = await prismiClient.getByUID('posts', slug ?? '');

  const post = {
    slug: slug?.toString(),
    title: RichText.asText(prismicData.data.title),
    subtitle: RichText.asText(prismicData.data.subtitle),
    content: RichText.asHtml(prismicData.data.content),
    image: {
      url: prismicData.data.image.url,
    },
  };

  return { props: { post } };
};
