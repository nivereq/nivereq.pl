import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.discordapp.com/**')],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);