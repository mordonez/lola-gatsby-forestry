const config = require('./site-config.json')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "",
  siteMetadata: {
    title: config.title || "Lola",
    titleTemplate: config.titleTemplate || "%s | Lola",
    description: config.description || "An example website that is built with Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@src": "src",
          "@cms": "src/cms",
          "@hooks": "src/hooks",
          "@components": "src/components",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@img": "src/img",
          "@posts": "content/posts",
        },
        extensions: [
          "js",
        ],
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: (content, loaderContext) => {
          const theme = [
            `$primary: ${config.theme.colorsPrimary}`,
            `$light: ${config.theme.colorsLight}`,
            `$dark: ${config.theme.colorsDark}`,
            `$link: ${config.theme.colorsLink}`,
          ]
          return theme.join("\r\n").concat("\r\n").concat(content);
        },
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
              linkImagesToOriginal: false,
              showCaptions: ['title'],
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: false, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    //"gatsby-plugin-htaccess", // If host on own server
    //"gatsby-plugin-netlify", // If host on own Netilify
  ],
};
