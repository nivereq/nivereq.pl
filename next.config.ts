import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.discordapp.com/**')],
  },
};
 
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);