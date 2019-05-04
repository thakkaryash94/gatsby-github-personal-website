/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useContext, useEffect } from "react"
import { ThemeContext } from '../theme-context'

import "./layout.scss"

function Layout({ children }) {
  const { state: { theme } } = useContext(ThemeContext)
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
