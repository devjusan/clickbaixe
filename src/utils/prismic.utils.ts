import { RichText } from 'prismic-dom';
import * as prismicT from '@prismicio/types';

export const formatPrismicPosts = (
  posts: prismicT.PrismicDocument<Record<string, any>, string, string>[],
) =>
  posts.map((post) => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    subtitle: RichText.asText(post.data.subtitle),
    image: {
      url: post.data.image.url,
    },
  }));
