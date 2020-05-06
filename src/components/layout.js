import React from "react";
import { Link, withPrefix } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { rhythm } from "../utils/typography";
import SocialBar from "./socialbar";
import "./layout.css";

library.add(fab);

const Layout = ({ location, children }) => {
  const rootPath = withPrefix("/");
  let header;

  if (location.pathname === rootPath) {
    header = (
      <img className="logo" alt="AdoptOpenJDK logo" src={withPrefix("adopt_logo_white.svg")} />
    );
  } else {
    header = (
      <Link to={"/"} style={{ boxShadow: "none", color: "inherit" }}>
        <img className="logo" alt="AdoptOpenJDK logo" src={withPrefix("adopt_logo_white.svg")} />
      </Link>
    );
  }

  return (
    <div>
      <header id="site-header-main">
        {header}
        <div id="header-social-bar" style={{ top: "3rem" }}>
          <SocialBar />
        </div>
      </header>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}>
        <main>
          {children}
        </main>
        <footer>
          © 2017–{new Date().getFullYear()}, Built with
          {" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
