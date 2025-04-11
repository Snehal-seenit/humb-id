module.exports = {
  extends: ['next/core-web-vitals'],
  env: {
    browser: true,
    node: true,
    jest: true, // ✅ Add Jest environment support
  },
  rules: {
    'react/no-unescaped-entities': 'warn',
    '@next/next/no-img-element': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
  },
};
