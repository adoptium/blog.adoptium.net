import React from "react";
import { StyleRoot, Style } from "radium";

const Footer = () => {

  let solsticeFooterStyle = {
    background: "#14003c",
    paddingTop: "60px",
    color: "#fff",
    paddingBottom: "26px",
    fontSize: "14px",
    borderTop: "none",
    display: "block",
    "@media (max-width: 767px)": { 
      textAlign: "center",
    },
    fontFamily: "sans-serif",
    fontWeight: 300,
  };

  let footerContainerStyle = {
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 992px)": { 
      width: "970px", 
    },
    "@media (min-width: 1200px)": { 
      width: "1170px", 
    },
  };

  let footerRowStyle = {
    "@media (min-width: 768px)": { 
      content: "",
      clear: "both", 
    },
  };

  let colsm6 = {
    "@media (min-width: 768px)": { 
      float: "left",
      width: "25%"
    }
  };

  let navStyle = {
    "@media (max-width: 767px)": { 
      marginLeft: 0,
      fontWeight: 300
    },
  };

  return (
    <StyleRoot>
      <footer id="solstice-footer" className="darkmode-ignore" style={solsticeFooterStyle}>
        <Style
          scopeSelector=".nav>li"
          rules={{
            paddingBottom: "1em",
            position: "relative",
            display: "block"
          }}
        />
        <Style
          scopeSelector="footer#solstice-footer p"
          rules={{
            lineHeight: "1.2rem"
          }}
        />
        <Style
          scopeSelector="footer#solstice-footer a"
          rules={{
            textDecoration: "none",
            boxShadow: "none",
            color: "#fff",
            lineHeight: "0.3rem"
          }}
        />
        <Style
          scopeSelector="#footer-row h2"
          rules={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: "1.5em",
          }}
        />
        <Style
          scopeSelector=".nav>li>a"
          rules={{
            position: "relative",
            display: "block"
          }}
        />
        <Style
          scopeSelector="#footer-row:after"
          rules={{
            "@media (min-width: 768px)": { 
              content: "",
              display: "table",
              clear: "both"
            }
          }}
        />
        <div className="footer-container" style={footerContainerStyle}>
          <div id="footer-row" style={footerRowStyle}>
            <section className="hidden-print" id="footer-eclipse-foundation" style={colsm6}>
              <h2 className="section-title">Eclipse Foundation</h2>
              <ul className="nav" style={navStyle}>
                <li><a href="https://www.eclipse.org/org/">About Us</a></li>
                <li><a href="https://www.eclipse.org/org/foundation/contact.php">Contact Us</a></li>
                <li><a href="https://www.eclipse.org/donate">Donate</a></li>
                <li><a href="https://www.eclipse.org/membership">Members</a></li>
                <li><a href="https://www.eclipse.org/org/documents/">Governance</a></li>
                <li><a href="https://www.eclipse.org/org/documents/Community_Code_of_Conduct.php">Code of Conduct</a></li>
                <li><a href="https://www.eclipse.org/artwork/">Logo and Artwork</a></li>
                <li><a href="https://www.eclipse.org/org/foundation/directors.php">Board of Directors</a></li>
              </ul>
            </section>
            <section className="hidden-print" id="footer-legal" style={colsm6}>
              <h2 className="section-title">Legal</h2>
              <ul className="nav" style={navStyle}>
                <li><a href="https://www.eclipse.org/legal/privacy.php">Privacy Policy</a></li>
                <li><a href="https://www.eclipse.org/legal/termsofuse.php">Terms of Use</a></li>
                <li><a href="https://www.eclipse.org/legal/copyright.php">Copyright Agent</a></li>
                <li><a href="https://www.eclipse.org/legal/epl-2.0/">Eclipse Public License</a></li>
                <li><a href="https://www.eclipse.org/legal/">Legal Resources</a></li>
              </ul>
            </section>
            <section className="hidden-print" id="footer-useful-links" style={colsm6}>
              <h2 className="section-title">Useful Links</h2>
              <ul className="nav" style={navStyle}>
                <li><a href="https://bugs.eclipse.org/bugs/">Report a Bug</a></li>
                <li><a href="//help.eclipse.org/">Documentation</a></li>
                <li><a href="https://www.eclipse.org/contribute/">How to Contribute</a></li>
                <li><a href="https://www.eclipse.org/mail/">Mailing Lists</a></li>
                <li><a href="https://www.eclipse.org/forums/">Forums</a></li>
                <li><a href="//marketplace.eclipse.org">Marketplace</a></li>
              </ul>
            </section>
            <section className="hidden-print" id="footer-other" style={colsm6}>
              <h2 className="section-title">Other</h2>
              <ul className="nav" style={navStyle}>
                <li><a href="https://www.eclipse.org/ide/">IDE and Tools</a></li>
                <li><a href="https://www.eclipse.org/projects">Projects</a></li>
                <li><a href="https://www.eclipse.org/org/workinggroups/">Working Groups</a></li>
                <li><a href="https://www.eclipse.org/org/research/">Research@Eclipse</a></li>
                <li><a href="https://www.eclipse.org/security/">Report a Vulnerability</a></li>
                <li><a href="https://status.eclipse.org">Service Status</a></li>
              </ul>
            </section>
          </div>
          <div className="col-sm-24 margin-top-20">
            <div id="footer-row" style={footerRowStyle}>
              <div id="copyright" className="col-md-16">
                <p id="copyright-text">Copyright © Eclipse Foundation, Inc. All Rights Reserved.</p>
                <p>Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </StyleRoot>
  );
};

export default Footer;