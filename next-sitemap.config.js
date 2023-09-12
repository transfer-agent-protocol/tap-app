/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: "https://transferagentprotocol.xyz",
    generateRobotsTxt: true, // (optional)
    exclude: ["/app*", "/_next/*"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "*",
                allow: ["/", "/join"],
                disallow: ["/app*", "/_next/*"],
            },
        ],
    },
    // ...other options
};

module.exports = config;
