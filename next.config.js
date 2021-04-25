const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  env: {
    API_URL:
      process.env.NODE_ENV === 'production'
        ? 'http://localhost:3333/'
        : 'http://localhost:3333/'
  },
  images: {
    domains: ['storage.googleapis.com']
  }
});
