import createNextIntlPlugin from 'next-intl/plugin';

// This wires next-intl to the App Router build
const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  // Your Next.js config
  reactStrictMode: true
});
