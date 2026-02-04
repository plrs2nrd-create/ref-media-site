// src/lib/directus.ts
import { createDirectus, rest } from "@directus/sdk";

export type DirectusSchema = {
  posts: {
    id: string;
    title?: string;
    content?: string;
    date_created?: string;
  };
};

const DIRECTUS_URL =
  import.meta.env.PUBLIC_DIRECTUS_URL ?? "https://admin.refined-lab.online";

export const directus = createDirectus<DirectusSchema>(DIRECTUS_URL).with(rest());
