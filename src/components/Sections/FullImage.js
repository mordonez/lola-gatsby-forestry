import * as React from "react";
import PropTypes from "prop-types";
import FullWidthImage from "@components/FullWidthImage";
import { getImage } from "gatsby-plugin-image";

const FullImage = ({ data }) => {
  const image = getImage(data.image)
  return (
    <FullWidthImage image={image || { url: data.image} } height={data.height} heading={data.heading} subheading={data.subheading} imagePosition="center"/>
  )
} ;

FullImage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      subheading: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      height: PropTypes.number
    })
  ),
};

export default FullImage;
