import * as React from "react";
import PropTypes from "prop-types";
import Form from "@components/Form";

const ContactForm = ({ data }) => {
  return (
    <Form data={data.thanks}/>
  )
};

ContactForm.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      thanks: PropTypes.string,
    })
  ),
};

export default ContactForm;
