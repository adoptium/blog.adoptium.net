import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { rhythm } from "../utils/typography";
import NavBar from "./navbar";
import "./layout.css";

library.add(fab);

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar/>
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
