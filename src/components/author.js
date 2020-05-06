import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProfilePic from "./profilepic";
import { rhythm } from "../utils/typography";

const GitHubLink = (props) => {
  if (!props.name) {
    return null;
  }

  return (
    <a href={`https://github.com/${props.name}`}><FontAwesomeIcon icon={["fab", "github"]} /></a>
  );
};

const TwitterLink = (props) => {
  if (!props.name) {
    return null;
  }

  return (
    <a href={`https://twitter.com/${props.name}`}><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
  );
};

const Author = (props) => {
  const author = props.author;
  const identifier = props.identifier;

  return (
    <div
      style={{
        display: "flex",
        marginBottom: rhythm(2.5),
      }}
    >
      <ProfilePic identifier={identifier} name={author.name} />
      <p>
        Posted by <strong>{author.name}</strong>
        {author.summary &&
         <>– {author.summary}</>
        }
        {" "}
        <GitHubLink name={author.github} />
        {" "}
        <TwitterLink name={author.twitter} />
      </p>
    </div>
  );
};

export default Author;
