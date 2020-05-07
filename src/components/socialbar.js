import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "glamor";

const socialIconStyle = {
  position: "absolute",
  marginRight: "2rem",
  right: 0
};

const faLayerStyleHover = css({
  width: "2em",
  height: "2em",
  fontSize: "1.1em",
  borderRadius: "50px",
  background: "#ffffff",
  opacity: 0.5,
  transition: "0.5s",
  ":hover": {
    opacity: 1,
    transform: "scale(1.2)"
  },
});

const faSocialIconStyle = {
  color: "#152935"
};

const SocialBar = () => {
  return (
    <>
      <div id="header-social-bar" style={socialIconStyle}>
        <div className="social-icon align-center inline-block" style={{ margin: "0 0.35rem" }}>
          <a
            href="https://twitter.com/adoptopenjdk"
            target="_blank"
            rel="noopener noreferrer"
            className="light-link no-underline"
          >
            <span className={`${faLayerStyleHover} fa-layers`}>
              <FontAwesomeIcon className="fa-social-icon" size="1x" icon={["fab", "twitter"]} style={faSocialIconStyle} />
            </span>
          </a>
        </div>
        <div className="social-icon align-center inline-block" style={{ margin: "0 0.35rem" }}>
          <a
            href="https://www.facebook.com/adoptopenjdk"
            target="_blank"
            rel="noopener noreferrer"
            className="light-link no-underline"
          >
            <span className={`${faLayerStyleHover} fa-layers`}>
              <FontAwesomeIcon className="fa-social-icon" size="1x" icon={["fab", "facebook"]} style={faSocialIconStyle} />
            </span>
          </a>
        </div>
        <div className="social-icon align-center inline-block" style={{ margin: "0 0.35rem" }}>
          <a
            href="https://www.youtube.com/c/AdoptOpenJDK"
            target="_blank"
            rel="noopener noreferrer"
            className="light-link no-underline"
          >
            <span className={`${faLayerStyleHover} fa-layers`}>
              <FontAwesomeIcon className="fa-social-icon" size="1x" icon={["fab", "youtube"]} style={faSocialIconStyle}/>
            </span>
          </a>
        </div>
        <div className="social-icon align-center inline-block" style={{ margin: "0 0.35rem" }}>
          <a
            href="https://www.twitch.tv/adoptopenjdk"
            target="_blank"
            rel="noopener noreferrer"
            className="light-link no-underline"
          >
            <span className={`${faLayerStyleHover} fa-layers`}>
              <FontAwesomeIcon className="fa-social-icon" size="1x" icon={["fab", "twitch"]} style={faSocialIconStyle} />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialBar;
