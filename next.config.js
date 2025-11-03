/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/evermore-website' : '',
  assetPrefix: isProd ? '/evermore-website' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/evermore-website' : '',
  },
}

module.exports = nextConfig