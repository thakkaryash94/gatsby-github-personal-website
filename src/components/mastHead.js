import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Emoji from 'react-emoji-render'
import Octicon, { MarkGithub, Location, Mail } from '@githubprimer/octicons-react'
import useSiteMetadata from '../hooks/siteMetaData'
import { ThemeContext } from "../theme-context"

function mastHead({ metaData }) {
  const { state: { style, theme } } = useContext(ThemeContext)

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
      {metaData &&
        <div className="f4 mb-6">
          {user.name &&
            <div className={metadata_styles}>
              <span style={{ color: theme.iconColor }}><Octicon icon={MarkGithub} size={20} verticalAlign='middle' className="mr-2" ariaLabel="GitHub" /></span>
              <a href={`https://github.com/${user.login}`} className={style === 'dark' && "text-white"}>
                @{user.login}
              </a>
            </div>
          }
          {user.email &&
            <div className={metadata_styles}>
              <span style={{ color: theme.iconColor }}><Octicon icon={Mail} size={20} verticalAlign='middle' className="mr-2" ariaLabel="email" /></span>
              <a href={`mailto:${user.email}`} className={style === 'dark' && "text-white"}>
                {user.email}
              </a>
            </div>
          }
          {user.location &&
            <div className={`${metadata_styles} ` + (style === 'dark' && "text-white")}>
              <span style={{ color: theme.iconColor }}><Octicon icon={Location} size={20} verticalAlign='middle' className="mr-2" ariaLabel="Location" /></span>
              {user.location}
            </div>
          }
          {user.isHireable &&
            <span title="Hire me" className="d-inline-block f5 rounded-2 text-white bg-green py-1 px-2">Available for hire</span>
          }
        </div>
      }
    </>
  )
}

export default mastHead
