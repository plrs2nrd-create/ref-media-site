import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus('https://admin.refined-lab.online')
  .with(rest());