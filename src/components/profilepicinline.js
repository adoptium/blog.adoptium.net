import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

const ProfilePicInline = (props) => {
  const data = useStaticQuery(graphql`
    query ProfilePicQueryInline {
      avatar: allFile(filter: { absolutePath: { regex: "/authors/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
              }
            }        
          }
        }
      }
    }
  `);

  const profilePic = data.avatar.edges.find(item => item.node.name === props.identifier);
  if (!profilePic) {
    return null;
  }

  return (
    <Image
      fixed={profilePic.node.childImageSharp.fixed}
      alt={props.name}
      style={{
        marginLeft: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 30,
        borderRadius: "100%",
      }}
      imgStyle={{
        borderRadius: "50%",
      }}
    />
  );
};

export default ProfilePicInline;
