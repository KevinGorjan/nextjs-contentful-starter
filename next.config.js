/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'ferf1mheo22r9ira.public.blob.vercel-storage.com',
      }
    ],
  },
};

module.exports = nextConfig;
