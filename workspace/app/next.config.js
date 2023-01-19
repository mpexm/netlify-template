const withTM = require('next-transpile-modules')(['@scope/ui'])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['loremflickr.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
})
