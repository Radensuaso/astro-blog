/**
 * BlogPostImage interface
 * @interface BlogPostImage
 *
 * @type {string} url
 * @type {string} alt
 */
export interface BlogPostImage {
  url: string;
  alt: string;
}

/**
 * BlogPost interface
 * @interface BlogPost
 *
 * @type {string} layout
 * @type {string} title
 * @type {string} pubDate
 * @type {string} description
 * @type {string} author
 * @type {BlogPostImage} image
 * @type {string[]} tags
 */
export interface BlogPost {
  url: string;
  layout: string;
  title: string;
  pubDate: string;
  description: string;
  author: string;
  image: BlogPostImage;
  tags: string[];
}
