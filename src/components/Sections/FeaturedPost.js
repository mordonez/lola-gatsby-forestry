import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "@components/PreviewCompatibleImage";
import { Link } from "gatsby";

const FeaturedPost = ({ data }) => {
  if (data) {
    return (
      <section className="section">
        <div className="container">
      <div className="column is-12">
        <h3 className="has-text-weight-semibold is-size-2">
          {data.heading}
        </h3>
            {data.post && data.post.fields ? <article
          className={`blog-list-item tile is-child box notification is-featured }`}
        >
          <header>
            {data.post?.frontmatter?.featuredimage && (
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: data.post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${data.post.frontmatter.title}`,
                    width:
                      data.post.frontmatter.featuredimage.childImageSharp
                        .gatsbyImageData.width,
                    height:
                      data.post.frontmatter.featuredimage.childImageSharp
                        .gatsbyImageData.height,
                  }}
                />
              </div>
            )}
            <p className="post-meta">
              <Link
                className="title has-text-primary is-size-4"
                to={data.post.fields.slug}
              >
                {data.post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <span className="subtitle is-size-5 is-block">
                {data.post.frontmatter.date}
              </span>
            </p>
          </header>
          <p>
            {data.post.excerpt}
            <br />
            <br />
            <Link className="button" to={data.post.fields?.slug}>
              Keep Reading →
            </Link>
          </p>
        </article> :<p>Loading...</p>}
      </div>
        </div>
      </section>
    )
  } else {
    return <></>
  }
};

FeaturedPost.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.number,
      post: PropTypes.object
    })
  ),
};

export default FeaturedPost;
