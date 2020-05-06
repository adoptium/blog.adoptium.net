import React from "react"
import { Link } from "gatsby"
import ProfilePicInline from "./profilepicinline"
import { rhythm } from "../utils/typography"

const Byline = (props) => {
  const { author, date, identifier } = props

  const href = `/author/${identifier}`

  return (
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        marginTop: rhythm(1 / 2),
        marginBottom: rhythm(1 / 2),
        textDecoration: `none`
      }}
    >
    {date} – posted by &nbsp; <Link to={href}>{author}</Link> <ProfilePicInline identifier={identifier} name={author.name} />
    </div>
  )
}

export default Byline
