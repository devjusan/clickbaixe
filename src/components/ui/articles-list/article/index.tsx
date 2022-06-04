import Image from 'next/image'
import Link from 'next/link'
import { StyledContainer } from './styled'
import { StyledSubtitle } from '../../../../styles/global'

interface IArticle {
  title: string
  slug: string
  image: {
    url: string
  }
  fromCategory?: boolean
}

const Article = ({ title, image, slug }: IArticle) => (
  <StyledContainer>
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
    <StyledSubtitle type="articleTitle" css={{ fontWeight: `bold` }}>
      {title}
    </StyledSubtitle>
  </StyledContainer>
)

export default Article
