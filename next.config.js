/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:'export',
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
