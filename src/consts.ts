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
    "Field notes on bass fishing, kayaking, camping, and the gear that holds up — written from the water, the woods, and the trail.",
  TAGLINE: "Stay wild. Go further.",
  // Affects <html lang> and date formatting
  LOCALE: "en-US",
  AUTHOR: {
    NAME: "Jake Wilder",
    // Sidebar avatar placeholder text, 1-2 characters
    INITIALS: "JW",
    ROLE: "Outdoor writer & weekend angler",
    SLOGAN:
      "Field notes from the water, the woods, and the trail. Everything here was tried outside first.",
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
  { href: "/tags", label: "Tags" },
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
  TITLE: "Home",
  DESCRIPTION:
    "Field notes on bass fishing, kayaking, camping, and the gear that holds up — written from the water, the woods, and the trail.",
};

export const TAGS: Metadata = {
  TITLE: "Tags",
  DESCRIPTION: "Browse articles by topic.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "About StayWildGo, Jake Wilder, and how every guide on this site is tested outside first.",
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
    "Get in touch with StayWildGo — corrections, route tips, gear questions, and partnership enquiries.",
};
