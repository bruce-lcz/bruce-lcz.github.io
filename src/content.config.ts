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
      'essay',
      'note',
      'tutorial',
      'review',
    ]),
    category: z.enum([
      // AI & Engineering
      'ai-engineering',
      'rag-document-ai',
      'solution-architecture',
      // Dev & Tools
      'dev-tools',
      // Personal
      'life',
      'learning',
      'thoughts',
    ]),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { articles };
