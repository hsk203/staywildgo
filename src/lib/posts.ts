import { getCollection, type CollectionEntry } from "astro:content";
import { CATEGORIES, type CategorySlug } from "./categories";

/** A post from any StayWildGo section. */
export type AnyPost =
  | CollectionEntry<"bass-fishing">
  | CollectionEntry<"kayaking">
  | CollectionEntry<"camping">
  | CollectionEntry<"gear">
  | CollectionEntry<"dog-trails">
  | CollectionEntry<"parks">
  | CollectionEntry<"tools">;

export function postUrl(post: AnyPost): string {
  return `/${post.collection}/${post.id}/`;
}

function byDateDesc(a: AnyPost, b: AnyPost) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

/** Every published post across all sections, newest first. */
export async function getAllPosts(): Promise<AnyPost[]> {
  const lists = await Promise.all(
    CATEGORIES.map((c) => getCollection(c.slug)),
  );
  return lists.flat().filter((p) => !p.data.draft).sort(byDateDesc);
}

/** Published posts in one section, newest first. */
export async function getCategoryPosts(
  slug: CategorySlug,
): Promise<AnyPost[]> {
  const posts = await getCollection(slug);
  return posts.filter((p) => !p.data.draft).sort(byDateDesc);
}
