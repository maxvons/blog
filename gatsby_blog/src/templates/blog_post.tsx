// React
import React, { useState } from "react";
import { Helmet } from "react-helmet";

// Gatsby
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Components
import Layout from "../components/Layout";

// Styles
import "../styles/blog_post.scss";

// Assets
import CoffeeIcon from "../assets/coffee_icon.svg";
import HeartIcon from "../assets/heart_icon.svg";
import { getCoffeeCups } from "../utilityFunctions";

const Template = (props: any) => {
  const { data } = props;

  // The blog post data can be found inside data.markdownRemark.
  const { markdownRemark: post } = data;

  const [activePage, setActivePage] = useState("blog_post");

  const coffeeCups = getCoffeeCups(post.frontmatter.minRead);
  const coffeeCupIcons: Array<string> = [];

  for (let i = 0; i < coffeeCups; i++) {
    coffeeCupIcons.push(CoffeeIcon);
  }

  return (
    <Layout
      activePage={activePage}
      setActivePage={setActivePage}
      pageTitle={post.frontmatter.title}
      pageMiniTitle={post.frontmatter.miniTitle}
    >
      <Helmet title={`WILFO - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <StaticImage
          className="portrait-img"
          src="../assets/max.jpg"
          alt="The author - Maximilian von Stephanides"
          placeholder="blurred"
          layout="fixed"
          width={150}
          height={150}
        />
        <p className="posted-text">
          Posted on <span className="black-text">{post.frontmatter.date}</span>
        </p>
        <div className="min-read-div margin-bottom-very-large">
          {coffeeCupIcons.map((coffeeIcon: string, index: number) => {
            if (index === coffeeCupIcons.length - 1) {
              return <img key={index} src={coffeeIcon} alt="Coffee cup icon" />;
            } else {
              return (
                <img
                  key={index}
                  className="margin-right-mini"
                  src={coffeeIcon}
                  alt="Coffee cup icon"
                />
              );
            }
          })}
          <p className="secondary-information margin-left-small">
            {post.frontmatter.minRead} min read
          </p>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <img className="heart-icon" src={HeartIcon} alt="A red heart icon" />
        <p className="heart-text">
          <span className="heart-count">2</span> hearts received
        </p>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        miniTitle
        minRead
      }
    }
  }
`;

export default Template;
