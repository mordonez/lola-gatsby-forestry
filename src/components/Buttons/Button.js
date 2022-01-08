import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Button = ({label, url, style}) => {
  const classes = {
    default: 'is-primary',
    light: 'is-link'
  }
  return (
      <Link className={`button ${classes[style]}`} to={url}>{label}</Link>
  )
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
};

export default Button;
