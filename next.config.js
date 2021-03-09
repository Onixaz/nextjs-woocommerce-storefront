module.exports = {
    // Target must be experimental-serverless-trace
    // Your build time will be longer with this option
    target: "experimental-serverless-trace",
  };

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
module.exports = withBundleAnalyzer({})
