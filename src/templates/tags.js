import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

const TagRoute = (props) => {

  const posts = props.data.allMarkdownRemark.edges;

  const postLinks = posts.map((post) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        {post.node.frontmatter.title}
      </Link>
    </li>
  ));

  const { tag } = props.pageContext;
  const { title } = props.data.site.siteMetadata;
  const { totalCount } = props.data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

  return (
    <Layout>
      <section className="section has-background-light">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container">
          <div className="content columns is-centered">
            <div
              className="column is-8">
              <div className="box">              
                <h3 className="is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <li>
                  <Link to="/tags/" className="">Browse all tags</Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
