/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
},
  reactStrictMode: false,
  images: {
    domains: ['igreja-irmaos-menonitas.s3.amazonaws.com',
      'igreja-irmaos-menonitas.s3.sa-east-1.amazonaws.com'
    ],
  },

};

export default nextConfig;
