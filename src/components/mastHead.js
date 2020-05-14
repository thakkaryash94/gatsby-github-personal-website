import { Avatar, BorderBox, Box, Heading, Link as PrimerLink, StyledOcticon, Text } from '@primer/components'
import { CircuitBoard, Link, Location, Mail, MarkGithub, Organization, } from '@primer/octicons-react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Emoji from 'react-emoji-render'
import Toggle from 'react-toggle'
import styled from 'styled-components'
import { Dev, Linkedin, Twitter } from 'styled-icons/fa-brands'

import useSiteMetadata from '../hooks/siteMetaData'
import useThemeContext from '../hooks/themeContext'

const StyledHr = styled.hr`
  ${props => props.color === 'dark' && 'border-top-color: whitesmoke;'}
`

export default ({ metaData }) => {
  const { layout, social } = useSiteMetadata()
  const { style, theme, setTheme } = useThemeContext()

  function onThemeChange(e) {
    const newStyle = e.target.checked ? 'dark' : 'light'
    setTheme(newStyle)
  }

  const {
    github: { viewer: user },
  } = useStaticQuery(
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
            company
            followers {
              totalCount
            }
            isDeveloperProgramMember
            websiteUrl
            organizations(first: 10) {
              nodes {
                avatarUrl
              }
            }
          }
        }
      }
    `
  )
  const StackedMeta = props =>
    <Box {...props} display={[null, null, 'inline-block']} mr={3} />

  const SideMeta = props =>
    <Box {...props} display={'flex'} alignItems={'center'} mb={3} />

  const MetaComponent = layout === 'stacked'
    ? StackedMeta
    : SideMeta

  const {
    websiteUrl,
    bio,
    login,
    email,
    organizations,
    avatarUrl,
    isHireable,
    name,
    location,
    isDeveloperProgramMember,
    company,
  } = user
  return (
    <>
      <Avatar
        src={avatarUrl}
        alt='user-avatar'
        className='circle'
        mb={3}
        size={150}
        borderRadius={'50%'}
        maxWidth={'150px'}
      />
      <Heading style={{ color: theme.iconColor }} mb={2} lh={'condensed'}>
        {name ? name : login}
      </Heading>
      <Box fontSize={4} mb={2}>
        {name && (
          <MetaComponent>
            <StyledOcticon
              color={theme.iconColor}
              icon={MarkGithub}
              size={20}
              verticalAlign='middle'
              mr={2}
              ariaLabel='GitHub'
            />
            <PrimerLink
              href={`https://github.com/${login}`}
              target='_blank'
              color={theme.iconColor}
            >
              {login}
            </PrimerLink>
          </MetaComponent>
        )}
        {social.dev && <PrimerLink
          href={social.dev}
          color={theme.iconColor}
          target='_blank'>
          <Dev size={20} color={theme.iconColor} title={`${name}'s DEV Profile`} />
        </PrimerLink>
        }
        {social.twitter && <PrimerLink
          href={social.twitter}
          color={theme.iconColor}
          marginLeft={2}
          target='_blank'>
          <Twitter size={20} color={theme.iconColor} title={`${name}'s Twitter Profile`} />
        </PrimerLink>
        }
        {social.linkedIn && <PrimerLink
          href={social.linkedIn}
          color={theme.iconColor}
          marginLeft={2}
          target='_blank'>
          <Linkedin size={20} color={theme.iconColor} title={`${name}'s LinkedIn Profile`} />
        </PrimerLink>
        }
      </Box>
      <StyledHr color={style} />
      {isDeveloperProgramMember && (
        <MetaComponent color={theme.iconColor}>
          <StyledOcticon
            color={theme.iconColor}
            icon={CircuitBoard}
            size={20}
            verticalAlign='middle'
            mr={2}
            ariaLabel='Location'
          />
          <BorderBox
            as={'span'} fontSize={5} border={0}
            color={'white'} bg={'green.5'} py={1} px={2}
            title='Developer Program Member'
            display={'inline-block'} borderRadius={2}
          >
            Developer Program Member
          </BorderBox >
        </MetaComponent>
      )}
      <Text
        as={'p'} mb={3} fontSize={2}
        color={style === 'dark' ? 'white' : 'gray.5'}
      >
        <Emoji text={bio || ''} />
      </Text>
      <Box mb={6} fontSize={4}>
        {company && (
          <MetaComponent color={theme.iconColor}>
            <StyledOcticon
              color={theme.iconColor}
              icon={Organization}
              size={20}
              verticalAlign='middle'
              mr={2}
              ariaLabel='Location'
            />
            {company}
          </MetaComponent>
        )}
        {location && (
          <MetaComponent color={theme.iconColor}>
            <StyledOcticon
              color={theme.iconColor}
              icon={Location}
              size={20}
              verticalAlign="middle"
              mr={2}
              ariaLabel="Location"
            />
            {location}
          </MetaComponent>
        )}
        {email && (
          <MetaComponent>
            <StyledOcticon
              color={theme.iconColor}
              icon={Mail}
              size={20}
              verticalAlign="middle"
              mr={2}
              ariaLabel="email"
            />
            <PrimerLink
              href={`mailto:${email}`}
              color={theme.iconColor}
            >
              {email}
            </PrimerLink>
          </MetaComponent>
        )}
        {websiteUrl && (
          <MetaComponent>
            <StyledOcticon
              color={theme.iconColor}
              icon={Link}
              size={20}
              verticalAlign='middle'
              mr={2}
              ariaLabel='email'
            />
            <PrimerLink
              href={websiteUrl}
              color={theme.iconColor}
            >
              {websiteUrl}
            </PrimerLink>
          </MetaComponent>
        )}
        {isHireable && (
          <BorderBox
            display={'inline-block'} fontSize={5} borderRadius={2}
            bg={'green.5'} py={1} px={2} title='Hire me' border={0}
          >
            Available for hire
          </BorderBox>
        )}
        <StyledHr color={style} />
        <Box mb={1}>
          <Heading mb={2} fontSize={4} style={{ color: style === 'dark' ? 'white' : 'black' }}>
            Organizations
          </Heading>
          {organizations &&
            organizations.nodes.map(({ avatarUrl }) => (
              <PrimerLink
                className={'avatar-group-item'}
                style={{ cursor: 'pointer' }}
                key={avatarUrl}
              >
                <Avatar size={35} mr={2} src={avatarUrl} />
              </PrimerLink>
            ))}
        </Box>
        <Box mt={16}>
          <Toggle
            defaultChecked={style === 'dark'}
            onChange={onThemeChange}
            icons={{
              checked: (
                <img
                  alt='dark-theme'
                  src='data:image/png;base64,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'
                  width={16}
                  height={16}
                />
              ),
              unchecked: (
                <img
                  alt="light-theme"
                  src="data:image/png;base64,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"
                  width={16}
                  height={16}
                />
              ),
            }}
          />
        </Box>
      </Box>
    </>
  )
}
