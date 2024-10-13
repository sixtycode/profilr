/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.maxSize = 30000;
    }
    return config;
  },
};

export default nextConfig;
