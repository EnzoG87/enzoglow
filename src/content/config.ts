import { z, defineCollection } from "astro:content";

const faqCollection = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.enum(["primary", "secondary", "extra"]),
    cost: z.number(),
    altCost: z.number().optional(),
    duration: z.number(),
    order: z.number(),
  }),
});

export const collections = {
  faq: faqCollection,
  services: servicesCollection,
};
