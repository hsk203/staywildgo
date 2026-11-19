import type { Metadata, NavLink, Site } from "@types";
import { CATEGORIES } from "@lib/categories";

/**
 * StayWildGo site info.
 */
export const SITE: Site = {
  TITLE: "StayWildGo",
  // Brand word shown in the header and footer
  WORDMARK: "StayWildGo",
  DESCRIPTION:
    "Outdoor field notes for better days outside—starting with practical bass-fishing guides, honest gear notes, and lessons from real days on the water, in camp, and on the trail.",
  TAGLINE: "Stay wild. Go further.",
  // Affects <html lang> and date formatting
  LOCALE: "en-US",
  AUTHOR: {
    NAME: "Jake Wilder",
    // Sidebar avatar placeholder text, 1-2 characters
    INITIALS: "JW",
    ROLE: "Outdoor writer & weekend angler",
    SLOGAN:
      "Field notes from the water, woods, and trail—practical advice shaped by real use, not showroom talk.",
  },
};

/** Header main nav: one link per section (flat subdirectories). */
export const NAV_LINKS: NavLink[] = CATEGORIES.map((c) => ({
  href: `/${c.slug}`,
  label: c.label,
}));

/** Footer nav: compliance and utility pages. */
export const FOOTER_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclosure", label: "Affiliate Disclosure" },
  { href: "/contact", label: "Contact" },
  { href: "/tags", label: "Topics" },
  { href: "/rss.xml", label: "RSS" },
];

/** Sidebar "In the Field" block. Leave the array empty to hide the block. */
export const FIELD_KIT: string[] = [
  "Baitcaster",
  "Fishing kayak",
  "Rooftop tent",
  "Trail dog — Biscuit",
];

/** Page titles and descriptions, used for <title> and SEO. */
export const HOME: Metadata = {
  TITLE: "Outdoor Field Notes & Bass Fishing Guides",
  DESCRIPTION:
    "Practical bass-fishing guides, honest gear notes, and field-tested advice for better days outside. StayWildGo starts on the water, with more outdoor field notes on the way.",
};

export const TAGS: Metadata = {
  TITLE: "Explore Topics",
  DESCRIPTION:
    "Browse StayWildGo field notes by fishing technique, outdoor gear, and trip-planning topic.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "Meet Jake Wilder and learn how firsthand experience, named sources, and honest updates shape StayWildGo's outdoor guides.",
};

export const PRIVACY: Metadata = {
  TITLE: "Privacy Policy",
  DESCRIPTION:
    "How StayWildGo handles your data: what we collect (almost nothing), cookies, and how to reach us.",
};

export const DISCLOSURE: Metadata = {
  TITLE: "Affiliate Disclosure",
  DESCRIPTION:
    "How StayWildGo earns money: affiliate links, reviews, and what that means for readers.",
};

export const CONTACT: Metadata = {
  TITLE: "Contact",
  DESCRIPTION:
    "Send StayWildGo a correction, a fishing or trail tip, a gear question, or a field-testing partnership inquiry.",
};
