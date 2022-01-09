import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image"
import Layout from "@components/Layout";
import Sections from "@components/Sections";
import SEO from "@components/seo";
import Content, { HTMLContent } from "@components/Content";

const BlockPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const PageContent = HTMLContent || page.html;

  return (
    <Layout>
      <SEO
        title={page.frontmatter.meta?.title || page.frontmatter.title}
        description={page.frontmatter.meta?.description || page.excerpt}
        image={getSrc(page.frontmatter.meta?.image)}
      />
      <Sections sections={page.frontmatter.header} />
      {(page.html || page.frontmatter.showtitle) && <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {page.frontmatter.showtitle && <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {page.frontmatter.title}
              </h2>
              }
              <PageContent className="content" content={page.html} />
            </div>
          </div>
        </div>
      </section>}
      <Sections sections={page.frontmatter.footer} />
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
        ...MetaInfo
      }
    }
  }
`;
