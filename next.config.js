/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    serverRuntimeConfig: {
        SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
    },
};

module.exports = nextConfig;
