// https://github.com/gatsbyjs/gatsby/issues/25214#issuecomment-649299286
const path = require("path");

module.exports = async (
  { graphql, actions, reporter }
) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            body
            slug
            wordCount {
              words
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug from on-create-node (or `node.frontmatter.slug`)
      path: `/blog/${node.slug}`,
      // This component will wrap our MDX content
      component: require.resolve(`../src/templates/post.js`),
      // You can use the values in this context in our page layout component
      context: { id: node.id },
    })
  })
};