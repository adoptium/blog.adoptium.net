import React from "react"

const Byline = (props) => {
  const { name, date } = props

  return (
    <>{date} – posted by {name}</>
  )
}

export default Byline
