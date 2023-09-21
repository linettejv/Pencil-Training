/** @type {import('next').NextConfig} */

const IMAGES_DOMAIN_WHITELIST = (process.env.IMAGES_DOMAIN_WHITELIST ?? '').split(',');

module.exports = {
  images: {
    domains: IMAGES_DOMAIN_WHITELIST,
  },
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
        'url-loader',
      ],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors 'none'`,
          },
        ],
      },
    ];
  },
};





