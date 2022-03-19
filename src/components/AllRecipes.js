import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        servings
        spaceId
        prepTime
        title
        cookTime
        description {
          raw
        }
        featured
        id
        content {
          ingredients
          tags
          instructions
          tools
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default function AllRecipes() {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  console.log(recipes)
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}
