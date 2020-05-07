import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

const ShareButton = (props) => {
  const { location, siteMetadata, post } = props;
  const twitter = [ siteMetadata.social.twitter ];
  const url = siteMetadata.siteUrl + location.pathname;

  const iconSize = 30;
  const iconStyle = {
    paddingRight: "0.3em",
    marginBottom: "0.2em"
  };

  return (
    <>
      <TwitterShareButton url={url} quote={url} title={post.title} hashtags={post.tags} related={twitter} style={iconStyle}>
        <TwitterIcon size={iconSize}/>
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={post.title} quote={url} source={siteMetadata.siteUrl} style={iconStyle}>
        <LinkedinIcon size={iconSize}/>
      </LinkedinShareButton>

      <FacebookShareButton url={url} quote={url} style={iconStyle}>
        <FacebookIcon size={iconSize}/>
      </FacebookShareButton>

      <RedditShareButton url={url} quote={url} title={post.title} style={iconStyle}>
        <RedditIcon size={iconSize}/>
      </RedditShareButton>

      <EmailShareButton url={url} quote={url} subject={post.title} style={iconStyle}>
        <EmailIcon size={iconSize}/>
      </EmailShareButton>
    </>
  );
};

export default ShareButton;
