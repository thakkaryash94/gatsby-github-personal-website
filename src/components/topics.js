import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import TopicCard from "./topicCard"
import { ThemeContext } from "../theme-context"

function Topics() {
  const { state: { mode: theme } } = useContext(ThemeContext)
  const { allDataYaml: { edges } } = useStaticQuery(
    graphql`
      query {
        allDataYaml {
          edges {
            node {
              topics {
                name
                web_url
                image_url
              }
            }
          }
        }
      }
    `
  )
  const topics = edges[0].node.topics
  return (
    <>
      <h2 className="text-white"></h2>
      <h2 className={theme === 'DARK' ? "text-white" : ""}>My Interests</h2>
      <p className={`f4 mb-4 ${theme === 'DARK' ? 'text-white' : 'text-gray'}`}>Topics that I want to learn more about.</p>
      <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
        {topics.map((topic, i) => (
          <div key={i} className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
            <TopicCard topic={topic} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Topics
