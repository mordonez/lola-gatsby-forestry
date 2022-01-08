import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Sections from "@components/Sections";
import { Helmet } from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
const BlockPageTemplate = ({
  title,
  showtitle,
  header,
  footer,
  helmet,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      {helmet || ""}
      <Sections sections={header} />
      {(content || showtitle) && <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {showtitle && <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              }
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>}
      <Sections sections={footer} />
    </div>
  );
};

BlockPageTemplate.propTypes = {
  title: PropTypes.string,
  showtitle: PropTypes.bool,
  header: PropTypes.array,
  footer: PropTypes.array,
  helmet: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const BlockPage = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <Layout>
      <BlockPageTemplate
        title={page.frontmatter.title}
        header={page.frontmatter.header}
        footer={page.frontmatter.footer}
        showtitle={page.frontmatter.showtitle}
        helmet={
          <Helmet>
            <title>{`${page.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${page.frontmatter.description}`}
            />
          </Helmet>
        }
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
      />
    </Layout>
  );
};

BlockPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BlockPage;

export const pageQuery = graphql`
  fragment Section on Sections {
    template
    position
    heading
    subheading
    content
    height
    image {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
    buttons {
      label
      url
      style
    }
    number
    box
    columns {
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      content
    }
    thanks
    post {
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
              width: 420
              quality: 100
              layout: CONSTRAINED
            )

          }
        }
      }
    }
  }

  query BlockPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        header {
          ...Section
        }
        footer {
          ...Section
        }
        title
        showtitle
      }
    }
  }
`;
