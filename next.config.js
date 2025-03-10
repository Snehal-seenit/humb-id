// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: false,
// 	swcMinify: true,
	
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	output: 'export'
  };
  
  module.exports = nextConfig;
  