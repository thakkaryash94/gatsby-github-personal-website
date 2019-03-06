/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useContext, useEffect } from "react"
import useSiteMetadata from '../hooks/siteMetaData'
import { ThemeContext } from "../theme-context"

import "./layout.scss"

function Layout({ children }) {
  const { style } = useSiteMetadata()
  const { state: { style: stateStyle, theme }, dispatch } = useContext(ThemeContext)
  if (stateStyle !== style) {
    dispatch({ type: 'CHANGE_THEME', value: style })
  }
  useEffect(
    () => {
      document.body.style.backgroundColor = theme.background
    },
    [theme.background]
  )
  return (
    <main>{children}</main>
  )
}


export default Layout
