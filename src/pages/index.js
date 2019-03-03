import React, { useContext } from "react"

import Layout from "../components/layout"
import MastHead from '../components/mastHead'
import Projects from '../components/porjects'
import Topics from '../components/topics'
import { ThemeContext } from "../theme-context"

function IndexPage() {
  const { dispatch } = useContext(ThemeContext)
  return (
    <Layout>
      <MastHead />
      <Projects />
      <Topics />
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>Theme</button>
    </Layout>
  )
}

export default IndexPage
