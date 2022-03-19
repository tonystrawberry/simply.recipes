import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

export default function TagsList({ recipes = [] }) {
  const tags = setupTags(recipes)

  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link key={index} to={`/${text}`}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}
