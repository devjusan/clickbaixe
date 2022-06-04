import { GetStaticPaths, GetStaticProps } from 'next'
import { createClient } from '../../../prismic.config'
import GoogleAdsenseContainer from '../../components/core/adsense-container'
import ArticlesList from '../../components/ui/articles-list'
import Loading from '../../components/ui/loading'
import NextBelow from '../../components/ui/next-bellow'
import { formatPrismicPosts } from '../../utils/prismic.utils'

interface ISearch {
  posts: {
    title: string
    subtitle: string
    slug: string
    image: {
      url: string
    }
  }[]
  sortedPosts: {
    title: string
    subtitle: string
    slug: string
    image: {
      url: string
    }
  }[]
  hideTitle?: boolean
}

const SearchPost = ({ posts, sortedPosts }: ISearch) => {
  if (!posts || !sortedPosts) {
    return <Loading force />
  }

  return (
    <>
      <GoogleAdsenseContainer onClick={() => console.log('');
      } />
      <ArticlesList isSearch posts={posts} />
      <NextBelow posts={sortedPosts} />
      <GoogleAdsenseContainer onClick={() => 0} />
    </>
  )
}

export default SearchPost

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true,
})

export const getStaticProps: GetStaticProps = async ({
  previewData,
  params,
}) => {
  const slug = params?.slug as string
  const prismicClient = createClient({ previewData })
  const posts = await prismicClient.getAllByType('posts')
  const mapPosts = formatPrismicPosts(posts)
  const sortedPosts = [...mapPosts]
    .sort(() => 0.5 - Math.random())
    .splice(0, 12)
  const slugPosts = [...mapPosts].filter((post) =>
    post.title.toLowerCase()?.includes(slug.toLowerCase())
  )

  return { props: { posts: slugPosts, sortedPosts } }
}
