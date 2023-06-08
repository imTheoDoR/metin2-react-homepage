/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        TZ: process.env.APP_TIME_ZONE || "Europe/Bucharest",
    },
};

module.exports = nextConfig;
