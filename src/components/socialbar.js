import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialBar = () => {
  return (
    <>
      <div className="social-icon align-center inline-block">
        <a
          href="https://twitter.com/adoptopenjdk"
          target="_blank"
          rel="noopener noreferrer"
          className="light-link no-underline"
        >
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon className="fa-social-icon" size="1x" icon={["fab", "twitter"]} />
          </span>
        </a>
      </div>
      <div className="social-icon align-center inline-block">
        <a
          href="https://www.facebook.com/adoptopenjdk"
          target="_blank"
          rel="noopener noreferrer"
          className="light-link no-underline"
        >
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon className="fa-social-icon" size="1x" icon={["fab", "facebook"]} />
          </span>
        </a>
      </div>
      <div className="social-icon align-center inline-block">
        <a
          href="https://www.youtube.com/c/AdoptOpenJDK"
          target="_blank"
          rel="noopener noreferrer"
          className="light-link no-underline"
        >
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon className="fa-social-icon" size="1x" icon={["fab", "youtube"]} />
          </span>
        </a>
      </div>
      <div className="social-icon align-center inline-block">
        <a
          href="https://www.twitch.tv/adoptopenjdk"
          target="_blank"
          rel="noopener noreferrer"
          className="light-link no-underline"
        >
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon className="fa-social-icon" size="1x" icon={["fab", "twitch"]} />
          </span>
        </a>
      </div>
    </>
  );
};

export default SocialBar;
