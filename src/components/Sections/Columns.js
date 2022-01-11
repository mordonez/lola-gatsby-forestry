import * as React from "react";
import PropTypes from "prop-types";
import showdown from 'showdown'
import { GatsbyImage } from "gatsby-plugin-image";

const Columns = ({ data }) => {

  if (data && data.columns) {
    const result = data.columns?.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / data.number)

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []
      }
      resultArray[chunkIndex].push(item)
      return resultArray
    }, [])
    return (
      <section className={`section ${data.box ? 'has-background-light' : ''}`}>
        <div className="container">
          {
            result.map((columns, index) => {
              return (<div key={index} className={`columns ${data.box ? 'is-centered' : ''}`}>
                {columns.map((column, index) => {
                  const converter = new showdown.Converter(),
                    html = converter.makeHtml(column.content);
                  return (<div key={index} className={`column ${data.box ? 'has-text-centered' : ''}`}>
                    <div className={`${data.box ? 'box' : ''}`}>
                      {column.image && <div className="mb-4">
                        <GatsbyImage
                          image={column.image.childImageSharp.gatsbyImageData}
                          style={{ borderRadius: "5px" }}
                          alt=""
                          className={data.box ? 'mx-3' : ''}
                        />
                      </div>}
                      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                  </div>)
                })}
              </div>)
            })
          }
        </div>
      </section>
    )
  } else {
    return <></>
  }
};

Columns.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.string.isRequired,
    columns: PropTypes.array,
    box: PropTypes.bool
  })
};

export default Columns;
