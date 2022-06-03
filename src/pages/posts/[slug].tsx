import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from 'prismic-dom'
import { useCallback } from 'react'
import DOMPurify from 'isomorphic-dompurify'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import {
  StyledContainer,
  StyledContent,
  StyledLine,
  StyledDisqusContainer,
  StyledTrailerContainer,
  StyledSteamContainer,
} from '../../pages-styles/posts-styled'
import { StyledSubtitle, StyledTitle } from '../../styles/global'
import NextBelow from '../../components/ui/next-bellow'
import { formatDate, getSlugFromParam } from '../../utils/formatter.utils'
import { createClient } from '../../../prismic.config'
import { formatPrismicPosts } from '../../utils/prismic.utils'
import DownloadButton from '../../components/ui/download-button'
import Contribute from '../../components/ui/contribute'
import Loading from '../../components/ui/loading'
import GoogleAdsenseContainer from '../../components/core/adsense-container'

interface IPost {
  post: {
    slug: string
    title: string
    subtitle: string
    content: string
    updatedAt: string
    href: string
    register: string | null
    image: {
      url: string
    }
    video: string
    steam: string
  }
  posts: {
    title: string
    subtitle: string
    slug: string
    image: {
      url: string
    }
  }[]
}

const Post = ({ post, posts }: IPost) => {
  if (!posts || !post) {
    return <Loading force />
  }

  const sanitizedContent = useCallback(
    () => DOMPurify.sanitize(post.content),
    [post.content]
  )

  return (
    <>
      <Head>
        <title>{post.title} / CLICKBAIXE</title>
      </Head>
      <Script>
        {`
            var disqus_config = function () {
            this.page.url = document.location.href;  
            this.page.identifier = document.location.href.split('posts')[1];
            };
            
            (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://https-clickbaixe-vercel-app.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })();`}
      </Script>
      <StyledContainer>
        <GoogleAdsenseContainer />
        <StyledTitle
          css={{ marginBottom: `$44` }}
          type={{ '@initial': `title`, '@sm': `mobile` }}
        >
          {post.title}
        </StyledTitle>
        <StyledSubtitle css={{ position: `relative` }} type="articleTitle">
          {post.subtitle}
        </StyledSubtitle>
        <time>{post.updatedAt}</time>
        <Image
          style={{ borderRadius: `10px` }}
          priority={false}
          width={700}
          height={350}
          src={post.image.url}
          alt="Imagem do post"
        />
        <StyledContent
          dangerouslySetInnerHTML={{ __html: sanitizedContent() }}
        />
        {post.steam && (
          <StyledSteamContainer
            dangerouslySetInnerHTML={{
              __html: post.steam,
            }}
          />
        )}
        {post.video && (
          <StyledTrailerContainer
            dangerouslySetInnerHTML={{
              __html: post.video,
            }}
          />
        )}
        <GoogleAdsenseContainer />
        <DownloadButton registerHref={post.register} href={post.href} />
        <StyledSubtitle css={{ textAlign: 'start' }}>
          Apoie o desenvolvedor. Compre o programa!
        </StyledSubtitle>
        <Contribute />
        <StyledLine />
        <StyledDisqusContainer id="disqus_thread" />
        <StyledLine />

        <NextBelow posts={posts} />
        <GoogleAdsenseContainer />
      </StyledContainer>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true,
})

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const TWELVE = 60 * 60 * 12
  const slug = getSlugFromParam(params)
  const prismiClient = createClient({ previewData })
  const prismicData = await prismiClient.getByUID(`posts`, slug)
  const posts = await prismiClient.getAllByType(`posts`)
  const mapPosts = formatPrismicPosts(posts)
  const sortedPosts = [...mapPosts]
    .sort(() => 0.5 - Math.random())
    .splice(0, 12)

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
    video: prismicData.data.video?.html ?? null,
    steam: RichText.asText(prismicData.data.steam) ?? null,
  }

  return { props: { post, posts: sortedPosts }, revalidate: TWELVE }
}
