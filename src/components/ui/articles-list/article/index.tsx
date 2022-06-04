import Image from 'next/image'
import Link from 'next/link'
import { StyledContainer, StyledDate } from './styled'
import { StyledSubtitle } from '../../../../styles/global'

interface IArticle {
  title: string
  slug: string
  image: {
    url: string
  }
  date: string
  fromCategory?: boolean
}

const Article = ({ title, image, slug, date }: IArticle) => (
  <StyledContainer css={{ position: 'relative' }}>
    <Link href={`/posts/${slug}`}>
      <Image
        src={image.url}
        width={300}
        height={176}
        priority
        alt="Uma postagem"
        style={{ cursor: `pointer` }}
      />
    </Link>
    <StyledDate>{date}</StyledDate>

    <StyledSubtitle type="articleTitle" css={{ fontWeight: `bold` }}>
      {title}
    </StyledSubtitle>
  </StyledContainer>
)

export default Article
