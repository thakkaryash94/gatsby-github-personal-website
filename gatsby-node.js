const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    const [postYear, postMonth, postDay, ...fileNames] = (slug.replace('/', '')).split('-')
    const fileName = fileNames.join('-')
    createNodeField({
      node,
      name: `slug`,
      value: `/${postYear}/${postMonth}/${postDay}/${fileName}`,
    })
    createNodeField({
      node,
      name: `postDate`,
      value: `${postYear}-${postMonth}-${postDay}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/postTemplate.js`),
        context: {
          slug: node.fields.slug,
          date: node.fields.postDate,
        },
      })
    })
  })
}
