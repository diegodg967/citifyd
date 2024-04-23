/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  fonts: {
    google: {
      families: {
        "Open Sans": [400, 600, 700],
      },
    },
  },
  reactStrictMode: false,
};

export default nextConfig;
