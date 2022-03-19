const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query getRecipe {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const slug = slugify(tag)

      createPage({
        path: `/tags/${slug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
