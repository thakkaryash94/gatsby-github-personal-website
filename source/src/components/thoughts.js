import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "./postCard"
import useThemeContext from "../hooks/themeContext"

function Thoughts() {
  const { style } = useThemeContext()
  const { allMarkdownRemark: { edges } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 6, filter: { frontmatter: { published: { eq: true } } }) {
          edges {
            node {
              frontmatter {
                title
                published
              }
              fields {
                slug
                postDate
              }
              html
            }
          }
        }
      }
    `
  )
  return edges.length > 0 ?
    <>
      <h2 className={style === 'dark' ? "text-white" : ""}>My Thoughts</h2>
      <p className={`f4 mb-4 ${style === 'dark' ? 'text-white' : 'text-gray'}`}>Articles I've written.</p>
      <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
        {edges.map((edge, index) => (
          <div key={index} className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
            <PostCard post={edge.node} />
          </div>
        ))}
      </div>
    </>
    : null
}

export default Thoughts
