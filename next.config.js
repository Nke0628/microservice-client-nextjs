/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: "tsconfig.build.json",
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sample",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
