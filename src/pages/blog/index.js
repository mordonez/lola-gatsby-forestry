import * as React from "react";

import Layout from "@components/Layout";
import BlogPosts from "@templates/blog-posts";
import { Helmet } from "react-helmet";

 const BlockPage = () => {

    return (
      <Layout>
        <Helmet title="Blog" description="" />
        <section className="section has-background-light">
          <div className="container">
            <div className="content">
              <BlogPosts />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

export default BlockPage
