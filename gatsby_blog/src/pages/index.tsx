import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Landing from "../components/Landing";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Card from "../components/Card";

const IndexPage = (props) => {
  const { data } = props;

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
      <Seo title="Home " />
      <Card
        heading="How to learn JavaScript"
        datePosted="Fri, 20.08.2021"
        minRead={14}
        tags={["Development", "Coding"]}
        excerpt="My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there.
        "
        path="/learn-javascript"
        marginBottom="margin-bottom-very-large"
        newlyPosted
      />
      <Landing />
    </Layout>
  );
};

export default IndexPage;
