/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect } from "react"
import useThemeContext from '../hooks/themeContext'

import "./layout.scss"

function Layout({ children }) {
  const { theme } = useThemeContext()
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
