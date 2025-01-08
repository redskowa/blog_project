import { defineCollection} from "astro:content";
import { z } from 'zod';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
    })
});

export const collections = {
    blog:blogCollection,
};