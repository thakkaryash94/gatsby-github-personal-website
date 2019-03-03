import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            theme
            layout
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
