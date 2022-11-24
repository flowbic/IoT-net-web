/** @type {import('next').NextConfig} */
const rewrites = () => {
  return [
    {
      source: "/asdf/:path*",
      destination: "http://localhost:4000",
    },
  ];
};
const nextConfig = {
  reactStrictMode: true,
  rewrites
}

module.exports = nextConfig
