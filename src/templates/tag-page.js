import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import ArticlePreview from "../components/articlepreview";
import AuthorData from "../../content/authors.json";

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  const tags = data.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={pageContext.tag}
        description={pageContext.tag}
      />
      <h1>{pageContext.tag}</h1>

      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      {tags.map(({ node }) => {
        const title = node.frontmatter.title;
        const author = AuthorData[node.frontmatter.author];
        return (
          <ArticlePreview
            key={node.fields.slug}
            author={author.name}
            date={node.frontmatter.date}
            postPath={node.fields.postPath}
            title={title}
            description={node.frontmatter.description}
            identifier={node.frontmatter.author}
            excerpt={node.excerpt}
          />
        );
      })}
    </Layout>
  );
};


export default Tags;

export const tagsPageQuery = graphql`
  query tagsPageQuery($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
        filter: {frontmatter: {tags: {eq: $tag}}}
        sort: { fields: [frontmatter___date], order: DESC }
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
                author
            }
        }
      }
    }
  }
`;
