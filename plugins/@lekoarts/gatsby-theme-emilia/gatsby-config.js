module.exports = (options) => ({
  plugins: [
    {
      resolve: require.resolve(`../../@lekoarts/gatsby-theme-emilia-core`),
      options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-theme-ui`,
  ],
})
