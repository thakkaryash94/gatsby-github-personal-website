module.exports = {
  siteMetadata: {
    style: `light`,
    layout: `sidebar`
  },
  pathPrefix: process.env.PATH_PREFIX || "/",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,	
    `gatsby-plugin-styled-components`,	  
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yaml`,
        path: `${__dirname}/src/data`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/data/posts`
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        }
      },
    },
  ],
}
