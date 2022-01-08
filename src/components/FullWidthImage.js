import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage({ height = 300,
  image,
  heading,
  subheading,
  imagePosition = "top left" }) {
  return (
    <React.Fragment>
      <div
        className="mt-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {image?.url ? (
          <img
            src={image.url}
            objectFit={"cover"}
            objectPosition={imagePosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
          <GatsbyImage
            image={image}
            objectFit={"cover"}
            objectPosition={imagePosition}
            style={{
              gridArea: "1/1",
              maxHeight: height,
            }}
            layout="fullWidth"
            aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(heading || subheading) && (
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
              display: "grid",
            }}
          >
            {heading && (
              <h1
                className="has-background-primary p-1 has-text-white has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              >
                {heading}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-background-primary has-text-white p-1 mt-2 has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
