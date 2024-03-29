/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
  images: {
    domains: [
      'cdn.shopify.com',
      'images.ctfassets.net',
      'downloads.ctfassets.net',
    ],
  },
  reactStrictMode: true,
}
