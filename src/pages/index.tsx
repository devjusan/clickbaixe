import { GetStaticProps } from 'next'
import { RichText } from 'prismic-dom'
import Head from 'next/head'
import Script from 'next/script'
import { StyledMain } from '../styles/global'
import { formatPrismicPosts } from '../utils/prismic.utils'
import ArticleList from '../components/ui/articles-list'
import Post from '../components/ui/post'
import { FAVORITE_SLUG } from '../constants/favorite-slug'
import { formatDate } from '../utils/formatter.utils'
import { createClient } from '../../prismic.config'
import Loading from '../components/ui/loading'
import DetectAdBlock from '../components/ui/detect-adblock'

interface IPost {
  post: {
    slug: string
    title: string
    subtitle: string
    image: {
      url: string
    }
    updatedAt: string
  }
  posts: {
    title: string
    subtitle: string
    slug: string
    image: {
      url: string
    }
    updatedAt: string
  }[]
}

const Home = ({ post, posts }: IPost) => (
  <>
    <Head>
      <title>CLICKBAIXE | Download de Jogos, Programas e Apps </title>
      <meta
        name="description"
        content="CLICKBAIXE | Download de Jogos, Programas e Apps"
      />
      <Script
        type="text/javascript"
        async
        id="Adsense-id"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
        crossOrigin="anonymous"
      />
      <Script
        async
        custom-element="amp-ad"
        src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
      />
      <Script
        id="dsq-count-scr"
        src="//https-clickbaixe-vercel-app.disqus.com/count.js"
        async
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Loading />
    <StyledMain>
      <Post post={post} />
      <ArticleList hideTitle posts={posts} />
      <DetectAdBlock />
    </StyledMain>
  </>
)

export default Home

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const ONE_HOUR = 60 * 30
  const prismiClient = createClient({ previewData })
  const { results } = await prismiClient.getByType(`favorite-slug`)
  const { uid: slug } = results[0]

  const prismicData = await prismiClient.getByUID(
    `posts`,
    slug?.toString() ?? FAVORITE_SLUG
  )
  const posts = await prismiClient.getAllByType(`posts`, { limit: 12 })
  const mapPosts = formatPrismicPosts(posts)

  const post = {
    slug: slug ?? FAVORITE_SLUG,
    title: RichText.asText(prismicData.data.title),
    subtitle: RichText.asText(prismicData.data.subtitle),
    image: {
      url: prismicData.data.image.url,
    },
    updatedAt: formatDate(prismicData.last_publication_date),
  }

  return { props: { post, posts: mapPosts }, revalidate: ONE_HOUR }
}
