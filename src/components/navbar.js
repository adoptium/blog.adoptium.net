import React from "react";
import { Link, withPrefix } from "gatsby";

import SocialBar from "./socialbar";

const NavBar = (location) => {

  const rootPath = withPrefix("/");
  let header;

  // let logoStyle = {
  //   height: "2.5em",
  //   marginBottom: 0
  // };

  let textLogoStyle = {
    color: "#FF1464",
    fontSize: "1.5em",
    fontFamily: "sans-serif",
    fontWeight: 400,
    marginBottom: "2.5em"
  };

  if (location.pathname === rootPath) {
    header = (
      // <img className="logo" alt="AdoptOpenJDK logo" src={withPrefix("adopt_logo_white.svg")} style={logoStyle} />
      <h2 style={textLogoStyle}>Adoptium</h2>
    );
  } else {
    header = (
      <Link to={"/"} style={{ boxShadow: "none", color: "inherit", lineHeight: "0px" }}>
        {/* <img className="logo" alt="AdoptOpenJDK logo" src={withPrefix("adopt_logo_white.svg")} style={logoStyle} /> */}
        <h2 style={textLogoStyle}>Adoptium</h2>
      </Link>
    );
  }

  return (
    <header className="darkmode-ignore" id="site-header-main" style={{ display: "flex", backgroundColor: "#14003c", justifyContent: "center", alignItems: "center", height: "6em"}}>
      {header}
      <SocialBar />
    </header>
  );
};

export default NavBar;
