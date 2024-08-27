/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placeimg.com",
      },
    ],
  },
};

export default nextConfig;
