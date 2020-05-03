import React from "react"

const Byline = (props) => {
  const { author, date } = props

  return (
    <>{date} – posted by {author}</>
  )
}

export default Byline
