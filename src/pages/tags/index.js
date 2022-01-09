import * as React from "react";
import { kebabCase } from "lodash";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "@components/seo";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO
        title="Tags"
        description=""
      />
    <section className="section has-background-light">
      <div className="container">
        <div className="content columns is-centered">
          <div
            className="column is-8 mb-3"
          >
            <div className="box">
              <h1 className="title is-size-2 is-bold-light">Tags</h1>
              <ul className="taglist">
                {group.map((tag) => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul></div>

          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
