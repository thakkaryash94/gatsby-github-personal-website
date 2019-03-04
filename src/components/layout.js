/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import { ThemeContext } from "../theme-context"

import "./layout.scss"

function Layout({ children }) {
  const { state: { theme }, dispatch } = useContext(ThemeContext)
  useEffect(
    () => {
      document.body.style.backgroundColor = theme.background
    },
    [theme.background]
  )
  const { github: { viewer: { name } } } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            name
          }
        }
      }
    `
  )
  return (
    <>
      <Helmet title={name}></Helmet>
      <main>{children}</main>
    </>
  )
}


export default Layout
