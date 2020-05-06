import React from "react";
import { graphql } from "gatsby";

import AuthorBio from "../components/authorbio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AuthorData from "../../content/authors.json";
import ArticlePreview from "../components/articlepreview";
import { rhythm } from "../utils/typography";


const AuthorPage = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  const author = AuthorData[pageContext.author];
  const posts = data.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={author.name}
        description={author.summary}
      />
      <h1>{author.name}</h1>
      <AuthorBio identifier={pageContext.author} author={author} />

      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title;
        return (
          <ArticlePreview
            key={node.fields.slug}
            author={author.name}
            date={node.frontmatter.date}
            postPath={node.fields.postPath}
            title={title}
            description={node.frontmatter.description}
            identifier={pageContext.author}
            excerpt={node.excerpt}
          />
        );
      })}
    </Layout>
  );

};

export default AuthorPage;

export const authorPageQuery = graphql`
  query authorPageQuery($author: String!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
        filter: {frontmatter: {author: {eq: $author}}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: $limit
    ) {
        edges {
        node {
            fields {
                slug,
                postPath
            }
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
            }
        }
      }
    }
  }
`;