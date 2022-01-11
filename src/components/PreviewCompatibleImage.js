import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" };

  const { alt = "", childImageSharp, image, className="" } = imageInfo;
  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
        className={className}
      />
    );
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
        className={className}
      />
    );
  } else if (image) {
    return <img style={{ imageStyle }} src={withPrefix(image)} alt={alt} className={className} />;
  } else {
    return null
  }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
