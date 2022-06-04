import Image from 'next/image'
import Link from 'next/link'
import { StyledTitle, StyledSubtitle } from '../../../styles/global'
import { StyledArticle, StyledLine } from './styled'

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
}

const Post = ({ post: { image, slug, subtitle, title, updatedAt } }: IPost) => (
  <StyledArticle>
    <Link href={`/posts/${slug}`}>
      <Image
        style={{ borderRadius: `10px` }}
        priority
        width={700}
        height={350}
        src={image.url}
        alt="Imagem do post"
        className="img-zoom"
      />
    </Link>
    <StyledTitle
      css={{ marginBottom: `$44` }}
      type={{ '@initial': `title`, '@sm': `mobile` }}
    >
      {title}
    </StyledTitle>
    <StyledSubtitle css={{ position: `relative` }} type="articleTitle">
      {subtitle}
    </StyledSubtitle>
    <time>{updatedAt}</time>
    <StyledLine />
  </StyledArticle>
)

export default Post
