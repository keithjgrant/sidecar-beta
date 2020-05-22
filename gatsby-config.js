module.exports = {
  siteMetadata: {
    title: 'Sidecar',
    description: 'A curated collection of cocktails for the home bartender',
    author: '@keithjgrant',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-slug'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sidecar',
        short_name: 'Sidecar',
        description: 'A curated collection of cocktails',
        start_url: '/',
        background_color: '#413d40',
        theme_color: '#f4b071',
        display: 'standalone',
        icon: 'src/images/icon.png',
        crossOrigin: 'use-credentials',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/drinks/', '/drinks/*'],
      },
    },
  ],
};
