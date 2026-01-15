import { defineConfig, s, defineCollection } from "velite";

const docs = defineCollection({
    name: "Docs",
    pattern: "**/*.mdx", // Points to your 'legal' directory
    schema: s
        .object({
            title: s.string(),
            raw: s.raw(),
            slug: s.path(),
            code: s.mdx(),
        })
});

export default defineConfig({
    collections: { docs },
    mdx: {}
});