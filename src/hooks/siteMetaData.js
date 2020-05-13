import {graphql, useStaticQuery} from 'gatsby'

const windowGlobal = typeof window !== 'undefined' && window

const useSiteMetadata =
    () => {
      const {site} = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            style
            layout
            social {
              dev
              twitter
              linkedIn
            }
          }
        }
      }
    `)
      if (windowGlobal.localStorage &&
          !windowGlobal.localStorage.getItem('theme')) {
        windowGlobal.localStorage.setItem('theme', site.siteMetadata.style)
      }
      return site.siteMetadata
    }

export default useSiteMetadata
