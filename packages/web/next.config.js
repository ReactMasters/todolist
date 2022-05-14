const withAntdLess = require('next-plugin-antd-less')
module.exports = {
  webpack(config, options) {
    return config
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  env: {
    GRAPHQL_URL: 'http://localhost:4000/graphql',
  },
  ...withAntdLess({
    lessVarsFilePath: './public/antd-custom.less',
    lessVarsFilePathAppendToEndOfContent: true,
    cssLoaderOptions: {},
  }),
}
