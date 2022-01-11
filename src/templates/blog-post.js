import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import SEO from "@components/seo";
import { getSrc } from "gatsby-plugin-image";

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const tags = post.frontmatter?.tags
  const PostContent = HTMLContent || Content;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.meta?.title || post.frontmatter.title}
        description={post.frontmatter.meta?.description || post.excerpt}
        image={getSrc(post.frontmatter.meta?.image || post.frontmatter.featuredimage)}
      />
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-7 ">
              <h1 className="title is-size-2 has-text-centered semibold">
                {post.frontmatter.title}
              </h1>
              <PostContent className="content is-medium" content={post.html} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <div className="tags">
                    {tags.map((tag,key) => (
                      <Link key={tag + `tag` + key} className="tag is-primary" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 600, quality: 85)
          }
        }
        ...MetaInfo
      }
    }
  }
`;
