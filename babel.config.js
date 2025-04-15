module.exports = {
  presets: [
    'next/babel', // Next.js preset (includes necessary Babel settings for Next.js)
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // Helps optimize async/await and other JS features
  ],
  // Optionally, you can also add any additional configurations or plugins, like support for TypeScript.
};
