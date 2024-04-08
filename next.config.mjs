/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: false,
  images: {
    domains: ['irmaos-menonitas.s3.amazonaws.com',
      'irmaos-menonitas.s3.sa-east-1.amazonaws.com'
    ],
  }
};

export default nextConfig;
