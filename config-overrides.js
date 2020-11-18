const path = require('path')
const { override, addWebpackAlias, addLessLoader } = require('customize-cra')

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
      },
    })
  ),
}
