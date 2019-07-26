module.exports = {
  siteMetadata: {
    title: `NUOCW`,
    description: `Demo for Nagoya University Open Course Ware new design site.`,
    author: `NUOCW staff`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nagoya University Open Course Ware`,
        short_name: `NUOCW`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/common/favicons.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
  ],
}
