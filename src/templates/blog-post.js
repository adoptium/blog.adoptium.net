import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Author from "../components/author";
import { rhythm } from "../utils/typography";
import AuthorData from "../../content/authors.json";
import GuestPost from "../components/guestpost";
import Byline from "../components/byline";
import ShareButton from "../components/share";
import Tags from "../components/tags";

const components = {
  GuestPost
};

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const author = AuthorData[post.frontmatter.author];
  const tags = post.frontmatter.tags;

  let twitterCard = null;

  if (post.frontmatter && post.frontmatter.featuredImage) {
    twitterCard = post.frontmatter.featuredImage.childImageSharp.sizes.src;
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        twitterCard={twitterCard}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
          >
          </p>
          <Byline date={post.frontmatter.date} author={author.name} identifier={post.frontmatter.author} />
          <ShareButton location={location} siteMetadata={data.site.siteMetadata} post={post.frontmatter}/>
        </header>
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <Tags tags={tags}/>
        <hr
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Author identifier={post.frontmatter.author} author={author} />
        </footer>
      </article>

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
            {next && (
              <Link to={next.fields.postPath} rel="next">
                ← {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.postPath} rel="prev">
                {previous.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        tags
      }
    }
  }
`;
