import React, { useContext } from "react"

import Layout from "../components/layout"
import MastHead from '../components/mastHead'
import Projects from '../components/projects'
import Topics from '../components/topics'
import useSiteMetadata from '../hooks/siteMetaData'
import { ThemeContext } from "../theme-context"

function IndexPage() {
  const { state: { mode: theme }, dispatch } = useContext(ThemeContext)
  const { layout } = useSiteMetadata()
  console.log(layout)
  return layout === 'stacked' ? <Layout>
    <div className="container-lg py-6 p-responsive text-center">
      <MastHead />
      <div className="my-6">
        <Projects />
      </div>
      <div className="my-6">
        <Topics />
      </div>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>Theme</button>
    </div>
  </Layout> :
    <Layout>
      <MastHead />
      <Projects />
      <Topics />
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>Theme</button>
    </Layout>
}

export default IndexPage
