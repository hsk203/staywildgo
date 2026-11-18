import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/**
 * One collection per section. The collection name is the URL segment:
 * src/content/bass-fishing/<slug>.md -> /bass-fishing/<slug>/
 *
 * cover accepts a local path (e.g. /covers/texas-rig.jpg) or an absolute URL.
 * sample marks layout-preview posts that are NOT real published guides.
 * faqs, when present, render a FAQ block plus FAQPage JSON-LD.
 */
const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().optional(),
  sample: z.boolean().optional(),
  tags: z.array(z.string().trim().min(1)).default([]),
  cover: z.string().optional(),
  // Products reviewed in the article (name + brand only, never prices:
  // prices are ranges in prose and must never be faked into schema).
  // Rendered as Product JSON-LD without offers.
  products: z
    .array(
      z.object({
        name: z.string(),
        brand: z.string().optional(),
      }),
    )
    .optional(),
  faqs: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    )
    .optional(),
});

function postCollection(base: string) {
  return defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base }),
    schema: postSchema,
  });
}

export const collections = {
  "bass-fishing": postCollection("./src/content/bass-fishing"),
  kayaking: postCollection("./src/content/kayaking"),
  camping: postCollection("./src/content/camping"),
  gear: postCollection("./src/content/gear"),
  "dog-trails": postCollection("./src/content/dog-trails"),
  parks: postCollection("./src/content/parks"),
  tools: postCollection("./src/content/tools"),
};
