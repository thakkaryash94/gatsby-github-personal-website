import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            style
            layout
          }
        }
      }
    `
  )
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', site.siteMetadata.style)
  }
  return site.siteMetadata
}

export default useSiteMetadata
