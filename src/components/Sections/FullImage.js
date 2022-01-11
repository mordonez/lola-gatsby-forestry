import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FullImage = ({ data }) => {
  const image = getImage(data.image)
  return (
    <div
      className="mt-0"
      style={{
        display: "grid",
        alignItems: "center",
      }}
    >
      <GatsbyImage
            image={image}
            objectFit={"cover"}
            objectPosition="center"
            style={{
              gridArea: "1/1",
              maxHeight: data.height ? data.height : "300",
            }}
            layout="fullWidth"
            aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        {(data.heading || data.subheading) && (
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
              display: "grid",
            }}
          >
            {data.heading && (
              <h1
                className="has-background-primary p-1 has-text-white has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              >
              {data.heading}
              </h1>
            )}
            {data.subheading && (
              <h3
                className="has-background-primary has-text-white p-1 mt-2 has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              >
                {data.subheading}
              </h3>
            )}
          </div>
        )}
      </div>
  )
} ;

FullImage.propTypes = {
  data: PropTypes.shape({
      heading: PropTypes.string,
      subheading: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      height: PropTypes.number
    })
};

export default FullImage;
