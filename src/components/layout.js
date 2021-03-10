import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Darkmode from "darkmode-js";
import TagManager from "react-gtm-module";

import { rhythm } from "../utils/typography";
import NavBar from "./navbar";
import Footer from "./footer";
import "./layout.css";

const tagManagerArgs = {
  gtmId: "GTM-5WLCZXC"
};

TagManager.initialize(tagManagerArgs);

// Add Eclipse Cookies banner
const script = document.createElement("script");
script.src = "//www.eclipse.org/eclipse.org-common/themes/solstice/public/javascript/vendor/cookieconsent/default.min.js";
script.async = true;
document.body.appendChild(script);

const options = {
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff",  // default: '#fff'
  buttonColorDark: "#100f2c",  // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  label: "🌓", // default: ''
  autoMatchOsTheme: false // default: true
};

new Darkmode(options).showWidget();

library.add(fab, fas);

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
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
