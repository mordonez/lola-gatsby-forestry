import * as React from "react";
import PropTypes from "prop-types";

const PageHeading = ({ data }) => (
  <section class="hero">
    <div class="hero-body has-text-centered">
      <h2 class="title is-size-2 has-text-weight-bold pb-3">
        {data.heading}
      </h2>
      <p class="subtitle is-size-4">
        {data.subheading}
      </p>
    </div>
  </section>
);

PageHeading.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
    })
  ),
};

export default PageHeading;
