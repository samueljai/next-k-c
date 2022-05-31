/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'pair-programming-test.s3.eu-west-2.amazonaws.com',
            'img.delicious.com.au',
        ],
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
};

module.exports = nextConfig;
