import * as React from "react";
import PropTypes from "prop-types";
import showdown from 'showdown'


const Content = ({ data }) => {
  if (data) {
    const converter = new showdown.Converter(),
    html = converter.makeHtml(data.content);
    return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </section>
      )
  } else {
    return <></>
  }
};

Content.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Content;
