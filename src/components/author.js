import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

import ProfilePic from "./profilepic";
import { rhythm } from "../utils/typography";

const GitHubLink = (props) => {
  if (!props.name) {
    return null;
  }

  return (
    <a className="no-underline" href={`https://github.com/${props.name}`}><FontAwesomeIcon icon={["fab", "github"]} /></a>
  );
};

const TwitterLink = (props) => {
  if (!props.name) {
    return null;
  }

  return (
    <a className="no-underline" href={`https://twitter.com/${props.name}`}><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
  );
};

const LinkedinLink = (props) => {
  if (!props.name) {
    return null;
  }

  return (
    <a className="no-underline" href={`https://www.linkedin.com/in/${props.name}`}><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
  );
};

const Author = (props) => {
  const author = props.author;
  const identifier = props.identifier;
  const href = `/author/${identifier}`;

  return (
    <div
      style={{
        display: "flex",
        marginBottom: rhythm(2.5),
      }}
    >
      <ProfilePic identifier={identifier} name={author.name} />
      <p>
        Posted by <Link to={href}>{author.name}</Link>
        {author.summary &&
         <>– {author.summary}</>
        }
        {" "}
        <GitHubLink name={author.github} />
        {" "}
        <TwitterLink name={author.twitter} />
        {" "}
        <LinkedinLink name={author.linkedin} />
      </p>
    </div>
  );
};

export default Author;
