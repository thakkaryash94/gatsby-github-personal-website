import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TopicCard from "./topicCard"

function Topics() {
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
      <h2 className="text-white">My Projects</h2>
      <p className="f4 mb-4 text-white ">GitHub repositories that I've built.</p>
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
