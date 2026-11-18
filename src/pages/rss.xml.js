import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getAllPosts } from "@lib/posts";

export async function GET(context) {
  const posts = await getAllPosts();

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: posts.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id}/`,
    })),
  });
}
