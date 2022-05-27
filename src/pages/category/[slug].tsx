import { useRouter } from 'next/router'
import { useCallback } from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  StyledContainer,
  StyledCategory,
  StyledLeftContainer,
  StyledRightContainer,
} from '../../pages-styles/category-styled'
import { split, getSlugFromParam } from '../../utils/formatter.utils'
import { StyledSubtitle } from '../../styles/global'
import ArticlesList from '../../components/ui/articles-list'
import SocialMedias from '../../components/ui/social-medias'
import { createClient } from '../../../prismic.config'
import { formatPrismicPosts } from '../../utils/prismic.utils'
import Loading from '../../components/ui/loading'

interface ICategories {
  posts: {
    title: string
    subtitle: string
    slug: string
    image: {
      url: string
    }
  }[]
}

const Categories = ({ posts }: ICategories) => {
  const { asPath } = useRouter()
  const category = useCallback(() => split(asPath), [asPath])

  if (!posts) {
    return <Loading force />
  }

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
          {` `}
          <StyledCategory>
            <span>TUDO SOBRE</span>
            <StyledSubtitle
              css={{
                textAlign: `start`,
                paddingLeft: `0`,
                fontWeight: `700`,
                fontSize: `$52`,
                fontFamily: `$logo`,
              }}
            >
              {category()}
            </StyledSubtitle>
          </StyledCategory>
          <ArticlesList hideTitle posts={posts} />
        </StyledLeftContainer>
        <StyledRightContainer>
          <SocialMedias />
        </StyledRightContainer>
      </StyledContainer>
    </>
  )
}

export default Categories

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true,
})

export const getStaticProps: GetStaticProps = async ({
  previewData,
  params,
}) => {
  const slug = getSlugFromParam(params)
  const prismicClient = createClient({ previewData })
  const prismicData = await prismicClient.getAllBySomeTags([slug])
  const posts = formatPrismicPosts(prismicData)

  return { props: { posts } }
}
