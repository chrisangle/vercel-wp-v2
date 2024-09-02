/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mysticthin.xyz"],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/ads.txt",
        destination: "/api/txt/ads",
      },
      {
        source: "/:path",
        destination: "/posts/:path",
      },
    ];
  },
};

export default nextConfig;
