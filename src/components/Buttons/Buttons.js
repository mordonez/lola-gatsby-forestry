import * as React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Buttons = ({ data }) => {
  if (data) {
    return (
      <div className="buttons">
        {data.map((button, key) =>
          <Button key={key} label={button.label} url={button.url} style={button.style} />
        )}
      </div>)
  } else {
    return <></>
  }
};

Buttons.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired,
    })
  ),
};

export default Buttons;
