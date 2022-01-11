import * as React from "react";
import PropTypes from "prop-types";

const PageHeading = ({ data }) => (
  <section className="hero">
    <div className="hero-body has-text-centered">
      <h2 className="title is-size-2 has-text-weight-bold pb-3">
        {data.heading}
      </h2>
      <p className="subtitle is-size-4">
        {data.subheading}
      </p>
    </div>
  </section>
);

PageHeading.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
  })
};

export default PageHeading;
