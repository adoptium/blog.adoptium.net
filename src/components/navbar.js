import React from "react";
import { Link, withPrefix } from "gatsby";

import Background from "../images/background.png";
import SocialBar from "./socialbar";

const NavBar = (location) => {

  const rootPath = withPrefix("/");
  let header;

  let logoStyle = {
    height: "2.5em",
    marginBottom: 0
  };

  if (location.pathname === rootPath) {
    header = (
      <img className="logo" alt="AdoptOpenJDK logo" src={withPrefix("adopt_logo_white.svg")} style={logoStyle} />
    );
  } else {
    header = (
      <Link to={"/"} style={{ boxShadow: "none", color: "inherit", lineHeight: "0px" }}>
        <img className="logo" alt="AdoptOpenJDK logo" src={withPrefix("adopt_logo_white.svg")} style={logoStyle} />
      </Link>
    );
  }

  return (
    <header id="site-header-main" style={{ display: "flex", backgroundColor: "#152935", backgroundImage: `url(${Background})`, justifyContent: "center", alignItems: "center", height: "6em"}}>
      {header}
      <SocialBar />
    </header>
  );
};

export default NavBar;
