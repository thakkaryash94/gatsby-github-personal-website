/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import "./layout.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        github {
          viewer {
            name
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <title>{data.github.viewer.name}</title>
        </Helmet>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
