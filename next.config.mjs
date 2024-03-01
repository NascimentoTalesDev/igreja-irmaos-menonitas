/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['igreja-irmaos-menonitas.s3.amazonaws.com',
      'igreja-irmaos-menonitas.s3.sa-east-1.amazonaws.com'
    ],
  }
};

export default nextConfig;
