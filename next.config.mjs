/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Good for Netlify’s Next.js runtime
  output: 'standalone',
  experimental: {
    // If you’re not using server actions, you can omit this
    // serverActions: { allowedOrigins: ['*'] }
  }
};

export default nextConfig;
