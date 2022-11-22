module.exports = {
  siteMetadata: {
    title: "Adoptium Blog",
    description: "Blog of Adoptium",
    siteUrl: "https://blog.adoptium.net/",
    social: {
      twitter: "Adoptium",
    },
  },
  pathPrefix: "/template_string", // For staging only (gets replaced with PR number)
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5WLCZXC",
        includeInDevelopment: true,
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-remark-images",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.postPath,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.postPath
                });
              });
            },
            query: `
              {
                allMdx(sort: {frontmatter: {date: DESC}}, limit: 10) {
                  totalCount
                  edges {
                    node {
                      excerpt
                      fields {
                        slug
                        postPath
                      }
                      frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Adoptium Blog",
            match: undefined,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Adoptium Blog",
        short_name: "Adoptium",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/adoptium-icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-eslint"
  ],
};
