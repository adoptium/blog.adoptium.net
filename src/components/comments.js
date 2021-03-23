import React from "react";

const Comments = () => {
  return (
    <p
      style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start"
      }}
      className="comments"
    >
      <em>Do you have questions or want to discuss this post? Hit us up on the <a href="https://adoptium.slack.com/">Adoptium Slack workspace</a>!</em>
    </p>
  );
};

export default Comments;
