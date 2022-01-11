import * as React from "react";
import PropTypes from "prop-types";
import PageHeading from "@components/Sections/PageHeading"
import ImageAndText from "@components/Sections/ImageAndText";
import FullImage from "@components/Sections/FullImage";
import FeaturedPost from "@components/Sections/FeaturedPost";
import Columns from "@components/Sections/Columns";
import ContactForm from "./Sections/ContactForm";

const Sections = ({ sections }) => {

  const sectionsComponents = {
    'section-page-heading': PageHeading,
    'section-image-and-text': ImageAndText,
    'section-full-image': FullImage,
    featuredpost: FeaturedPost,
    'section-columns': Columns,
    'section-contact-form': ContactForm
  }
  if (sections) {
    const sectionsContent = sections.map((section, key) => {
      const Section = sectionsComponents[section.template]
    if (Section) {
      return <Section key={`${section.template}-${key}`} data={section} />
    }
    return <div key={`${section}-${key}`}>{section.template}</div>
  })
  return (
    <>{sectionsContent}</>
  )}
  else { return <></>}
};

Sections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      template: PropTypes.string.isRequired,
      heading: PropTypes.string,
      subheading: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      buttons: PropTypes.array
    })
  ),
};

export default Sections;
