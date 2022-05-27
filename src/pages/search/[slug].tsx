import { GetStaticPaths, GetStaticProps } from 'next'
import { createClient } from '../../../prismic.config'
import ArticlesList from '../../components/ui/articles-list'
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

const SearchPost = ({ posts, sortedPosts }: ISearch) => (
  <>
    <ArticlesList isSearch posts={posts} />
    <NextBelow posts={sortedPosts} />
  </>
)

export default SearchPost

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true,
})

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const prismicClient = createClient({ previewData })
  const posts = await prismicClient.getAllByType(`posts`)
  const mapPosts = formatPrismicPosts(posts)
  const sortedPosts = mapPosts.sort(() => 0.5 - Math.random()).splice(0, 12)

  return { props: { posts: [], sortedPosts } }
}
