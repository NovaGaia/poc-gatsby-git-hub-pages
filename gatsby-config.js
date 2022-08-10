module.exports = {
  siteMetadata: {
    title: `Poc Gatsby GitHub Pages`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: '/poc-gatsby-git-hub-pages',
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
