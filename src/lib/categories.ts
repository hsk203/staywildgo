/**
 * StayWildGo sections (flat subdirectories, no subdomains).
 * The collection name in src/content/<slug>/ matches the URL segment.
 * Bass fishing leads: it is the first directory to be filled (25-30 posts).
 */
export type CategorySlug =
  | "bass-fishing"
  | "kayaking"
  | "camping"
  | "gear"
  | "dog-trails"
  | "parks"
  | "tools";

export type Category = {
  slug: CategorySlug;
  label: string;
  shortLabel: string;
  description: string;
  cover: string;
  coverAlt: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "bass-fishing",
    label: "Bass Fishing",
    shortLabel: "Bass Fishing",
    description:
      "Lures, rigs, and hard-won lessons from the water — tested on real mornings, not in a studio.",
    cover: "/covers/category-bass-fishing.webp",
    coverAlt: "Angler casting a baitcasting rod toward a quiet lake at dawn",
  },
  {
    slug: "kayaking",
    label: "Kayaking",
    shortLabel: "Kayaking",
    description:
      "Fishing kayaks, paddling routes, and the on-the-water setup that actually works.",
    cover: "/covers/category-kayaking.webp",
    coverAlt: "Kayaker paddling a touring kayak on a calm lake",
  },
  {
    slug: "camping",
    label: "Camping",
    shortLabel: "Camping",
    description:
      "Car camping, dispersed sites, and camp craft that holds up when the weather turns.",
    cover: "/covers/category-camping.webp",
    coverAlt: "Olive tent at a tidy lakeside pine-forest campsite",
  },
  {
    slug: "gear",
    label: "Gear",
    shortLabel: "Gear",
    description:
      "Outdoor gear, compared honestly after real use — what lasts, what breaks, what is worth the money.",
    cover: "/covers/category-gear.webp",
    coverAlt: "Outdoor hiking gear arranged on a pale wooden workbench",
  },
  {
    slug: "dog-trails",
    label: "Dog Trails",
    shortLabel: "Dog Trails",
    description:
      "Hiking and camping with your trail dog: rules, packing, and keeping them safe out there.",
    cover: "/covers/category-dog-trails.webp",
    coverAlt: "Dog hiking on a wooded trail beside its owner",
  },
  {
    slug: "parks",
    label: "Parks",
    shortLabel: "Parks",
    description:
      "National parks, road trips, and weekend routes — where to go and when to go.",
    cover: "/covers/category-parks.webp",
    coverAlt:
      "Scenic national-park mountains, forest and lake with a hiking trail",
  },
  {
    slug: "tools",
    label: "Tools",
    shortLabel: "Tools",
    description:
      "Packing lists, checklists, and trip planners you can use before you leave the driveway.",
    cover: "/covers/category-tools.webp",
    coverAlt: "Notebook, map and compass arranged for outdoor trip planning",
  },
];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug);

export function categoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryLabel(slug: string): string {
  return categoryBySlug(slug)?.label ?? slug;
}
