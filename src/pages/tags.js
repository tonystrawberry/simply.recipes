import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"

export default function Tags({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  const newTags = setupTags(recipes)

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }, filter: {}) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
