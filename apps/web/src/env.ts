import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().optional().default("vX"),
    NEXT_PUBLIC_SANITY_DATASET: z.string(),
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
    NEXT_PUBLIC_SANITY_STUDIO_HOST: z.string(),
    NEXT_PUBLIC_SANITY_STUDIO_URL: z.string(),
    NEXT_PUBLIC_SANITY_PORTAL_DATASET: z.string(),
    NEXT_PUBLIC_SANITY_CARGO_PREVIEW_URL: z.string(),
    NEXT_PUBLIC_SANITY_INVENTORY_PREVIEW_URL: z
      .string()
      .default("http://localhost:3000"),
  },
  server: {
    HTTP_PROXY: z.string().optional(),
    HTTPS_PROXY: z.string().optional(),
  },
  clientPrefix: "NEXT_PUBLIC_SANITY_",
  runtimeEnvStrict: {
    HTTP_PROXY: process.env.HTTP_PROXY,
    HTTPS_PROXY: process.env.HTTP_PROXY,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_STUDIO_HOST: process.env.NEXT_PUBLIC_SANITY_STUDIO_HOST,
    NEXT_PUBLIC_SANITY_STUDIO_URL: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    NEXT_PUBLIC_SANITY_PORTAL_DATASET:
      process.env.NEXT_PUBLIC_SANITY_PORTAL_DATASET,
    NEXT_PUBLIC_SANITY_INVENTORY_PREVIEW_URL:
      process.env.NEXT_PUBLIC_SANITY_INVENTORY_PREVIEW_URL,
    NEXT_PUBLIC_SANITY_CARGO_PREVIEW_URL:
      process.env.NEXT_PUBLIC_SANITY_CARGO_PREVIEW_URL,
  },
  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === "lint",
});
