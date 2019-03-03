import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GoMarkGithub, GoLocation } from 'react-icons/go'
import useSiteMetadata from '../hooks/siteMetaData'
import { ThemeContext } from "../theme-context"

function mastHead() {
  const { state } = useContext(ThemeContext)

  const { layout } = useSiteMetadata()
  const { mode: theme } = state
  const { github: { viewer: user } } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            name
            email
            bio
            login
            url
            avatarUrl
            isHireable
            location
          }
        }
      }
    `
  )
  const metadata_styles = layout === 'stacked' ? 'd-md-inline-block mr-3' : 'd-flex flex-items-center mb-3'
  return (
    <>
      <img src={user.avatarUrl} alt="user-avatar" className="circle mb-3" style={{ maxWidth: '150px' }} />
      <h1 className={theme === 'DARK' ? "text-white" : "mb-2 lh-condensed"}>{user.name ? user.name : user.login}</h1>
      <p className={"mb-3 f4" + theme === 'DARK' ? "text-white" : "text-gray"}>
        {user.bio}
      </p>
      <div className="f4 mb-6">
        {user.name &&
          <div className={metadata_styles}>
            {/* {% octicon mark-github height:20 class:"mr-2 v-align-middle" fill:{{ icon_color }} aria-label:GitHub %} */}
            <GoMarkGithub />
            <a href={`https://github.com/${user.login}`} className={theme === 'DARK' ? "text-white" : ""}>
              @{user.login}
            </a>
          </div>
        }
        {user.email &&
          <div className={metadata_styles}>
            {/* {% octicon mail height:20 class:"mr-2 v-align-middle" fill:{{ icon_color }} aria-label:email %} */}
            <a href={`mailto:${user.email}`} className={theme === 'DARK' ? "text-white" : ""}>
              {user.email}
            </a>
          </div>
        }
        {user.location &&
          <div className={metadata_styles + (theme === 'DARK' ? "text-white" : "")}>
            <GoLocation />
            {/* {% octicon location height:20 class:"mr-2 v-align-middle" fill:{{ icon_color }} aria-label:Location %} */}
            {user.location}
          </div>
        }
        {user.isHireable &&
          <span title="Hire me" className="d-inline-block f5 rounded-2 text-white bg-green py-1 px-2">Available for hire</span>
        }
      </div>
    </>
  )
}

export default mastHead
