import React from "react";
import { Link, withPrefix } from "gatsby";

import SocialBar from "./socialbar";

const NavBar = (location) => {

  const rootPath = withPrefix("/");
  let header;

  let logoStyle = {
    height: "3.5em",
    marginBottom: 0
  };

  if (location.pathname === rootPath) {
    header = (
      <img className="logo" alt="Adoptium logo" src={withPrefix("adoptium_logo.svg")} style={logoStyle} />
    );
  } else {
    header = (
      <Link to={"/"} style={{ boxShadow: "none", color: "inherit", lineHeight: "0px" }}>
        <img className="logo" alt="Adoptium logo" src={withPrefix("adoptium_logo.svg")} style={logoStyle} />
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
