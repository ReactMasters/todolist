module.exports = {
  webpack(config, options) {
    return config
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  env: {
    GRAPHQL_URL: 'http://localhost:4000/graphql',
  },
}
