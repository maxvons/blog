import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Landing from "../components/Landing";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Card from "../components/Card";

const PostsPage = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  const [activePage, setActivePage] = useState("index");
  return (
    <Layout
      pageTitle="What I've learned"
      pageTitleMuted="from others"
      pageMiniTitle="A concept by"
      pageMiniTitlePrimary="Maximilian von Stephanides"
      activePage={activePage}
      setActivePage={setActivePage}
    >
      <Card
        heading="How to learn JavaScript"
        datePosted="Fri, 20.08.2021"
        minRead={14}
        tags={["Development", "Coding"]}
        excerpt="My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there.
        "
        path="/learn-javascript"
        newlyPosted
      />
      <div className="blog-posts">
        {posts
          .filter((post) => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            );
          })}
        <Seo title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default PostsPage;
