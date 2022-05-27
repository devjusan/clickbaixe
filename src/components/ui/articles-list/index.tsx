/* eslint-disable no-nested-ternary */
import { StyledContainer, StyledContainerList } from './styled'
import Article from './article'
import { StyledSubtitle, StyledTitle } from '../../../styles/global'

interface IArticlesList {
  posts: {
    title: string
    subtitle: string
    slug: string
    image: {
      url: string
    }
  }[]
  isSearch?: boolean
  hideTitle?: boolean
}

const ArticlesList = ({ posts, hideTitle, isSearch }: IArticlesList) => (
  <StyledContainer>
    {!hideTitle && (
      <StyledTitle css={{ fontSize: `35px`, marginBottom: `$44` }} type="title">
        Últimos posts
      </StyledTitle>
    )}

    <StyledContainerList>
      {posts.length ? (
        [...posts].map((post) => (
          <Article
            slug={post.slug}
            image={post.image}
            title={post.title}
            key={post.slug}
          />
        ))
      ) : isSearch ? (
        <StyledSubtitle>
          Não foram encontrados resultados referente a pesquisa
        </StyledSubtitle>
      ) : (
        <StyledSubtitle>
          Ainda não há conteudos sobre esta categoria. Tente novamente mais
          tarde!
        </StyledSubtitle>
      )}
    </StyledContainerList>
  </StyledContainer>
)

export default ArticlesList
