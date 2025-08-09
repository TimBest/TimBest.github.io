module.exports = {
  siteMetadata: {
    title: `Timothy Best`,
    description: `Timothy Best's website`,
    author: `Timothy Best`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`*/components/*`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#852237`,
        theme_color: `#852237`,
        display: `minimal-ui`,
        icon: `src/static/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
