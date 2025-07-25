/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'], // ✅ Allow external image source
  },
};

export default nextConfig;
