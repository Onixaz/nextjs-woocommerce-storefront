const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  module.exports = withBundleAnalyzer({})

// const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.plugins.push(new DuplicatePackageCheckerPlugin())
//     return config
//   },
// }
