import { RichText } from 'prismic-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import * as prismicT from '@prismicio/types'
import { formatDate } from './formatter.utils'

export const formatPrismicPosts = (
  posts: prismicT.PrismicDocument<Record<string, any>, string, string>[]
) =>
  [...posts].map((post) => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    subtitle: RichText.asText(post.data.subtitle),
    image: {
      url: post.data.image.url,
    },
    updatedAt: formatDate(post.last_publication_date),
  }))

export const formatPrismicArticles = (
  posts: prismicT.PrismicDocument<Record<string, any>, string, string>[]
) =>
  [...posts].map((post) => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    content: RichText.asHtml(post.data.content),
    updatedAt: formatDate(post.last_publication_date),
  }))
