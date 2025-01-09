/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
      {
        protocol: 'https',
        hostname: 'pansani-dev-photoshot-models.s3.amazonaws.com',
        pathname: '/prediction-results/**',
      }
    ],
  },
};

module.exports = nextConfig;
