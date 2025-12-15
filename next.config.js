/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const isProd = process.env.NODE_ENV === 'production';

/** @type {(phase: string) => import('next').NextConfig} */
module.exports = (phase) => {
  const isStaticExportBuild = phase === PHASE_PRODUCTION_BUILD;

  return {
    reactStrictMode: true,
    // Only enable static export for production builds.
    // Keeping this on in `next dev` causes Next 14.2.x to incorrectly error on
    // dynamic routes even when `generateStaticParams()` is present.
    output: isStaticExportBuild ? 'export' : undefined,
    basePath: isProd ? '/evermore-website' : '',
    assetPrefix: isProd ? '/evermore-website' : '',
    images: {
      unoptimized: true,
    },
    env: {
      NEXT_PUBLIC_BASE_PATH: isProd ? '/evermore-website' : '',
    },
  };
};