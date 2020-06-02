import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AuthorData from "../../content/authors.json";
import ArticlePreview from "../components/articlepreview";

const BlogPage = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const { currentPageNumber, previousPageNumber, nextPageNumber } = pageContext;
  const previousPageLink = previousPageNumber === 1 ? "/" : `/page/${previousPageNumber}`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`All posts – Page ${currentPageNumber}`} />
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
            tags={node.frontmatter.tags}
          />
        );
      })}
      <nav>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            {previousPageNumber && (
              <Link to={previousPageLink} rel="prev">
                ← Previous page
              </Link>
            )}
          </li>
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

export default BlogPage;

export const blogPageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug,
            postPath
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            tags
          }
        }
      }
    }
  }
`;
