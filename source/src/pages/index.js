import React from "react"
import "../components/Toggle.css"

import Layout from "../components/layout"
import useThemeContext from "../hooks/themeContext"
import MastHead from '../components/mastHead'
import Projects from '../components/projects'
import Interests from '../components/interests'
import Thoughts from '../components/thoughts'
import SEO from '../components/seo'
import useSiteMetadata from '../hooks/siteMetaData'

function IndexPage() {
  const { style } = useThemeContext()
  const { layout } = useSiteMetadata()
  return <Layout>
    <SEO />
    {layout === 'stacked' ?
      <div className="container-lg py-5 p-responsive text-center">
        <MastHead metaData={true} />
        <div className="my-6">
          <Projects />
        </div>
        <div className="my-6">
          <Interests />
        </div>
        <div className="my-6">
          <Thoughts />
        </div>
      </div> :
      <div className={`d-md-flex ${style !== 'dark' && 'border-md-bottom'}`}>
        <div className={`flex-self-stretch ${style === 'dark' ? 'bg-gray-dark' : 'border-md-right border-gray-light bg-white'} col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-5`}>
          <MastHead metaData={true} />
        </div>
        <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-5 px-lg-7 border-top border-md-top-0" style={{ backgroundColor: style === 'dark' ? "#2f363d" : "#fafbfc" }}>
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <Projects />
            <Interests />
            <Thoughts />
          </div>
        </div>
      </div>
    }
  </Layout>
}
export default IndexPage
