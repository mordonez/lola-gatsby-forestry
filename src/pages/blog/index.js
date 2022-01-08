import * as React from "react";

import Layout from "@components/Layout";
import BlogRoll from "@components/BlogRoll";
import { Helmet } from "react-helmet";

 const BlockPage = () => {

    return (
      <Layout>
        <Helmet title="Blog" description="" />
        <section className="section has-background-light">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

export default BlockPage
