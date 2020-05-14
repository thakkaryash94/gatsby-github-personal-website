import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import MastHead from '../components/mastHead'
import useSiteMetadata from '../hooks/siteMetaData'
import useThemeContext from '../hooks/themeContext'
import { Heading } from '@primer/components'

export default () => {
  const { style } = useThemeContext()
  const { layout } = useSiteMetadata()
  return (
    <Layout>
      {layout === 'stacked' ?
        <div className='container-lg py-5 p-responsive text-center'>
          <MastHead metaData={false} />
          <div className="container-md f4 text-left border rounded-2 bg-white p-3 p-sm-5 mt-6">
            <div style={{ left: '50%', textAlign: 'center' }}>
              <Heading mb={2} fontSize={7}>404</Heading>
              <p className='f2'>Page Not Found</p>
              <p className="f5"><span style={{ color: "#0366d6" }}>
                <Link to='/'>Home</Link>
              </span>
              </p>
            </div>
          </div>
        </div>
        :
        <div className={`d-md-flex ${style !== 'dark' ? 'border-md-bottom' : ''}`}>
          <div className={`flex-self-stretch ${style === 'dark' ? 'bg-gray-dark' : 'border-md-right border-gray-light bg-white'} col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-5`}>
            <MastHead metaData={true} />
          </div>

          <div className='col-md-7 col-lg-8 col-xl-9 px-4 py-5 px-lg-7 border-top border-md-top-0' style={{ backgroundColor: style === 'dark' ? '#2f363d' : '#fafbfc' }}>
            <div className='mx-auto' style={{ maxWidth: '900px' }}>
              <div className={`f4 ${style === 'dark' ? 'text-white' : ''} mb-6`}>
                <div className={`f4 ${style === 'dark' && 'text-white'}`}>
                  <div style={{ position: 'absolute', top: '40%', left: '50%', textAlign: 'center' }}>
                    <Heading mb={2} fontSize={7}>404</Heading>
                    <p className='f2'>Page Not Found</p>
                    <p className="f5"><span style={{ color: "#0366d6" }}>
                      <Link to='/'>Home</Link>
                    </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </Layout >
  )
}
