import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = ({ data }) => (
  <section className="hero has-background-light">
    <div className="container hero-body px-0 py-6">
    <div className="columns ">
      <div className="column is-half">
        <h2 className="title is-1">{data.title}</h2>
        <p>
          {data.description}
        </p>
        <br />

        <div className="buttons is-left">
          <button className="button is-medium is-orange button is-link is-light">
            LINK 1
          </button>
          <button className="button is-medium is-black is-primary is-light">LINK 2</button>
        </div>
      </div>
      <div className="column is-half">
        <figure className="image is is-covered">
            <GatsbyImage
              image={data.image.childImageSharp.gatsbyImageData}
              style={{ borderRadius: "5px" }}
              alt={data.title}
            />
        </figure>
      </div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    })
  ),
};

export default Hero;
