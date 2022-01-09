import * as React from "react";

import Layout from "@components/Layout";
import BlogPosts from "@templates/blog-posts";
import SEO from "@components/seo";

 const BlockPage = () => {

    return (
      <Layout>
        <SEO
        title="Blogs"
        description=""
      />
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
