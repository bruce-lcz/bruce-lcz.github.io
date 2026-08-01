import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    type: z.enum([
      'case-study',
      'architecture-note',
      'technical-guide',
      'research-note',
    ]),
    category: z.enum([
      'enterprise-ai',
      'on-prem-llm',
      'rag-document-ai',
      'multimodal-ai',
      'ai-agents',
      'solution-architecture',
    ]),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { articles };
