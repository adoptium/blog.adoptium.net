import React from "react";
import { Link } from "gatsby";

import Byline from "./byline";
import { rhythm } from "../utils/typography";

/**
 * Article intro displayed on front page, archive, author page.
 */
const ArticlePreview = (props) => {
  const author = props.author;
  const date = props.date;
  const postPath = props.postPath;
  const title = props.title;
  const description = props.description;
  const excerpt = props.excerpt;
  const identifier = props.identifier;

  return (
    <article>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: "none" }} to={postPath}>
            {title}
          </Link>
        </h3>
        <Byline author={author} date={date} identifier={identifier}/>
      </header>
      <section>
        <p>
          {description || excerpt} <Link to={postPath}>Read more</Link>
        </p>
      </section>
    </article>
  );
};

export default ArticlePreview;
