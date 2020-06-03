import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TopicCard from "./topicCard"
import useThemeContext from "../hooks/themeContext"

export default () => {
  const { style } = useThemeContext()
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
      <h2 className={style === 'dark' ? "text-white" : ""}>My Interests</h2>
      <p className={`f4 mb-4 ${style === 'dark' ? 'text-white' : 'text-gray'}`}>Topics that I want to learn more about.</p>
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
