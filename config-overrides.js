const path = require('path')
const { override, addWebpackAlias, addLessLoader } = require('customize-cra')

module.exports = {
  webpack: override(
    (config, env) => {
      if (env === 'production') {
        config.output = {
          ...config.output,
          publicPath: '/fed-e-task-04-02/',
        }
      }

      return config
    },
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
