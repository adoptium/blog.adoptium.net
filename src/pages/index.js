import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AuthorData from "../../content/authors.json";
import ArticlePreview from "../components/articlepreview";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const nextPageNumber = data.allMdx.totalCount > 10 ? 2 : null;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
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
      <nav>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {nextPageNumber && (
              <Link to={`/page/${nextPageNumber}`} rel="next">
                Next page →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug,
            postPath
          }
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
