/** @type {import('next').NextConfig} */
const nextConfig = {

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
  reactStrictMode: true,
  trailingSlash: true,
  eslint : {
    ignoreDuringBuilds : true,
  },
  experimental: {
    // urlImports: ['https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.js'],
  },
};

const withTM = require('next-transpile-modules')(['react-tradingview-embed']);

module.exports = withTM(nextConfig);
