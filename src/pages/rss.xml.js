import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro blog',
    description: 'My journey learning Astro',
    site: 'https://radensuaso-astro-blog.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
