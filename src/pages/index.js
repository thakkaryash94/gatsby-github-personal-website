import React from "react"

import Layout from "../components/layout"
import MastHead from '../components/mastHead'
import Projects from '../components/porjects'
import Topics from '../components/topics'

const IndexPage = () => (
  <Layout>
    <MastHead />
    <Projects />
    <Topics />
  </Layout>
)

export default IndexPage
