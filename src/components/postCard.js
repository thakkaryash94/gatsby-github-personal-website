import React, { useContext } from 'react'
import { Link } from "gatsby"
import { ThemeContext } from "../theme-context"

export function formatePostDate(dateString) {
  const date = new Date(dateString)
  return `${date.toLocaleDateString('en-GB', { month: 'short' })} ${date.toLocaleDateString('en-GB', { day: 'numeric' })}, ${date.toLocaleDateString('en-GB', { year: 'numeric' })}`
}

function PostCard({ post }) {
  const { state: { style } } = useContext(ThemeContext)
  return (
    <div className={`height-full text-left ${style === 'dark' ? 'box-shadow' : 'border border - gray - light'} bg-white rounded-1 p-3`}>
      < div className="d-flex flex-justify-between flex-items-start mb-1">
        <h1 className="f4 lh-condensed mb-1">
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </h1>
      </div>
      <div className="text-gray mb-2 ws-normal">{formatePostDate(`${post.fields.postDate}`)}</div>
    </div>

  )
}

export default PostCard
