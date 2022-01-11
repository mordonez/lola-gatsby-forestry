import * as React from "react";
import PropTypes from "prop-types";
import Buttons from "@components/Buttons/Buttons";
import { GatsbyImage } from "gatsby-plugin-image";

const ImageAndText = ({ data }) => {
  const StyleComponents = {
    left: ImageLeft,
    right: ImageRight
  }
  const Component = StyleComponents[data.position]
  if (Component) {
    return <section className="section has-background-light">
      <div className="container">
        <div className="columns is-desktop is-vcentered">
          <Component data={data} />
        </div>
      </div>
    </section>
  } else {
    return <div>{data.style}</div>
  }
};

const TextComponent = ({ data }) => {
  return (<><h1 className="title is-size-1 has-text-weight-bold">{data.heading}</h1>
    <p className="is-size-5 mb-5">
      {data.content}
    </p>
    <Buttons data={data.buttons} /></>)
}
const ImageComponent = ({ data }) => {
  return (<figure className="image is is-covered">
    <GatsbyImage
      image={data.image.childImageSharp.gatsbyImageData}
      style={{ borderRadius: "5px" }}
      alt={data.heading}
    />
  </figure>)
}
const ImageRight = ({ data }) => {
  return <>
    <div className="column is-half">
      <TextComponent data={data} />
    </div>
    <div className="column is-half">
      <ImageComponent data={data} />
    </div>
  </>
}
const ImageLeft = ({ data }) => {
  return <>
    <div className="column is-half">
      <ImageComponent data={data} />
    </div>
    <div className="column is-half">
      <TextComponent data={data} />
    </div>
  </>
}

ImageAndText.propTypes = {
  data: PropTypes.shape({
      position: PropTypes.string,
      heading: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      buttons: PropTypes.array,
    })
};

export default ImageAndText;
