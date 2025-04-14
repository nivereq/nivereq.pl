import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.discordapp.com/**')],
  },
};
 
const withNextIntl = createNextIntlPlugin('./next-intl.config.ts');
export default withNextIntl(nextConfig);