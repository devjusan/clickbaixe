import Image from 'next/image'
import Link from 'next/link'
import { StyledContainer, StyledDate } from './styled'
import { StyledSubtitle } from '../../../../styles/global'
import { styled } from '../../../../styles'

interface IArticle {
  title: string
  slug: string
  image: {
    url: string
  }
  updatedAt: string
  fromCategory?: boolean
}

const StyledLinkContainer = styled('div', {})

const Article = ({ title, image, slug, updatedAt }: IArticle) => (
  <StyledContainer>
    <Link href={`/posts/${slug}`}>
      <StyledLinkContainer style={{ position: 'relative' }}>
        <Image
          src={image.url}
          width={300}
          height={176}
          priority
          alt="Uma postagem"
          style={{ cursor: `pointer` }}
        />
        <StyledDate>{updatedAt}</StyledDate>
      </StyledLinkContainer>
    </Link>

    <StyledSubtitle type="articleTitle" css={{ fontWeight: `bold` }}>
      {title}
    </StyledSubtitle>
  </StyledContainer>
)

export default Article
