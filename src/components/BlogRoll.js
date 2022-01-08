import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const BlogRollTemplate = (props) => {

  const { edges: posts } = props.data.allMarkdownRemark;

  return (<>
      {posts &&
        posts.map(({ node: post }) => (
          <div className="columns is-centered">
            <div className="column is-8">
              <div className="post mt-6 box">
                <div className="columns">
                  <div className="column is-8 is-offset-2 mt-6">
                    <h3 className="has-text-centered semibold">
                    <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >{post.frontmatter.title}
                   </Link>
                   </h3>
                    <p className="has-text-centered has-text-grey">{post.frontmatter.date}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-8 is-offset-2 mb-4">
                  <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                        className:"mb-4"
                      }}
                    />
                    <p>{post.excerpt}</p>
                    <Link to={post.fields.slug}>
                  Read more ...
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
  </>)
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templatekey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templatekey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        layout: FULL_WIDTH
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
