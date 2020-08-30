module.exports = {
  siteMetadata: {
    defaultTitle: `Gatsby BareBones Starter`,
    defaultDescription: `A starter for a minimal app`,
    siteUrl: `https://example.com`,
    defaultImage: "./static/favicon.ico",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },
  ],
}
