// React
import React, { useState } from "react";

// Gatsby
import { graphql } from "gatsby";

// Components
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Card from "../components/Card";

// Assets
import RedCircle from "../assets/red_circle.svg";

const IndexPage = (props: any) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  const [activePage, setActivePage] = useState("index");

  const newestPost = posts.length > 1 ? posts[0] : undefined;

  return (
    <Layout
      pageTitle="What I've learned"
      pageTitleMuted="from others"
      pageMiniTitle="A concept by"
      pageMiniTitlePrimary="Maximilian von Stephanides"
      activePage={activePage}
      setActivePage={setActivePage}
    >
      <Seo title="Home" />
      <div className="card-div">
        <Card
          heading={newestPost.node.frontmatter.title}
          datePosted={newestPost.node.frontmatter.date}
          minRead={newestPost.node.frontmatter.minRead}
          tags={newestPost.node.frontmatter.tags}
          excerpt={newestPost.node.frontmatter.excerpt}
          path={newestPost.node.frontmatter.path}
          marginBottom="margin-bottom-very-large"
          newlyPosted
          showDots
        />
        <img className="circle-red" src={RedCircle} alt="" />
      </div>
      <Landing />
    </Layout>
  );
};

export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            minRead
            tags
            excerpt
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;
