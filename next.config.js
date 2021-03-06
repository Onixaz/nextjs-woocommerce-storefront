const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  module.exports = withBundleAnalyzer({})

  module.exports = {
    // Target must be serverless
    target: "serverless",
  };
