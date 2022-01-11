import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "./all.sass";
import useSiteMetadata from "@hooks/useSiteMetadata";
const Layout = ({ children }) => {
  const { title, titleTemplate, description } = useSiteMetadata();
  return (
    <div>
      <Helmet bodyAttributes={{ class: 'has-navbar-fixed-top' }} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
