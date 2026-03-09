/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = nextTranslate({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'ja'],
    defaultLocale: 'ja'
  }
})

module.exports = nextConfig
