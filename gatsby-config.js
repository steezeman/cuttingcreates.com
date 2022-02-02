module.exports = {
  siteMetadata: {
    title: `cuttingcreates`,
    siteUrl: `https://www.cuttingcreates.com`,
    siteTitle: `Dave Cutting`,
    // Default title of the page
    siteTitleAlt: `Dave Cutting`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Cutting Creates - Dave Cutting's Design Portfolio`,
    // Used for SEO
    siteDescription: `TODO: Add site description`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `Dave Cutting`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Dave Cutting`,
        socialMedia: [
          {
            title: `Instagram`,
            href: `https://www.instagram.com/`
          }
        ]
      }
    },
  ]
}