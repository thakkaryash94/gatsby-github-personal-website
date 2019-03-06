import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Emoji from 'react-emoji-render'
import { GoMarkGithub, GoLocation, GoMail } from 'react-icons/go'
import useSiteMetadata from '../hooks/siteMetaData'
import { ThemeContext } from "../theme-context"

function mastHead() {
  const { state: { style } } = useContext(ThemeContext)

  const { layout } = useSiteMetadata()
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
      <h1 className={style === 'dark' ? "text-white" : "mb-2 lh-condensed"}>{user.name ? user.name : user.login}</h1>
      <p className={`mb-3 f4 ${style === 'dark' ? 'text-white' : 'text-gray'}`}>
        <Emoji text={user.bio || ''} />
      </p>
      <div className="f4 mb-6">
        {user.name &&
          <div className={metadata_styles}>
            <GoMarkGithub size={20} className="mr-2 v-align-middle" color={style === 'dark' ? "#ffffff" : "#24292e"} />
            <a href={`https://github.com/${user.login}`} className={style === 'dark' ? "text-white" : ""}>
              @{user.login}
            </a>
          </div>
        }
        {user.email &&
          <div className={metadata_styles}>
            <GoMail size={20} className="mr-2 v-align-middle" color={style === 'dark' ? "#ffffff" : "#24292e"} />
            <a href={`mailto:${user.email}`} className={style === 'dark' ? "text-white" : ""}>
              {user.email}
            </a>
          </div>
        }
        {user.location &&
          <div className={`${metadata_styles} ` + (style === 'dark' ? "text-white" : "")}>
            <GoLocation size={20} className="mr-2 v-align-middle" color={style === 'dark' ? "#ffffff" : "#24292e"} />
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
