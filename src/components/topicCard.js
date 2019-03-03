import React from 'react'

function TopicCard({ topic }) {
  return (
    <>
      {topic.web_url ?
        <a href={topic.web_url} className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
          {topic.image_url ?
            <img src={topic.image_url} width="64" height="64" className="mx-auto rounded-1 mb-3" alt={topic.name} /> :
            <div className="bg-blue-light f4 text-gray-light text-bold rounded-1 flex-shrink-0 text-center mx-auto mb-3" style={{ width: '64px', 'height': '64px', lineHeight: '64px' }}>#</div>
          }
          <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">{topic.name}</p>
          {topic.description && <p className="f5 text-gray text-center mb-0 mt-1">{topic.description}</p>}
        </a> :
        <div className="github-component position-relative height-full text-center border border-gray-light rounded-1 bg-white p-5">
          {topic.image_url ? <img src={topic.image_url} width="64" height="64" className="mx-auto rounded-1 mb-3" alt={topic.name} />
            : <div
              className="bg-blue-light f4 text-gray-light text-bold rounded-1 flex-shrink-0 text-center mx-auto mb-3"
              style={{ width: '64px', height: '64px', lineHeight: '64px' }}>#</div>
          }
          <p className="f3 lh-condensed text-center mb-0 mt-1">{topic.name}</p>
          {topic.description && <p className="f5 text-gray text-center mb-0 mt-1">{topic.description}</p>}
        </div>
      }
    </>
  )
}

export default TopicCard
