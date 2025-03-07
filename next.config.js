// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: false,
// 	swcMinify: true,
	
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	basePath: process.env.NODE_ENV === "production" ? "/id" : "",
	assetPrefix: process.env.NODE_ENV === "production" ? "/id/" : "",
	trailingSlash: true,
  };
  
  module.exports = nextConfig;
  