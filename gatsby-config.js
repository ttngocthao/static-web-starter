module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Company name",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-theme-material-ui`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Company name",
        short_name: "KDream Events",
        start_url: "/",
        background_color: "#222222",
        theme_color: "#222222",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150,
        duration: 2000
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
