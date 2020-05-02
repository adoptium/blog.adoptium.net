import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import AuthorData from "../../content/authors.json"

const BlogPage = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { currentPageNumber, previousPageNumber, nextPageNumber } = pageContext
  const previousPageLink = previousPageNumber === 1 ? `/` : `/page/${previousPageNumber}`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`All posts – Page ${currentPageNumber}`} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title
        const author = AuthorData[node.frontmatter.author]
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.postPath}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date} – posted by {author.name}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
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
  )
}

export default BlogPage

export const blogPageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
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
          }
        }
      }
    }
  }
`
