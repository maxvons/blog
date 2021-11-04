// React
import React, { useState } from "react";

// Components
import Resources from "../components/Resources";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// Assets
import { devLinks } from "../assets/links";

const DevExResources = (props: any) => {
  const [activePage, setActivePage] = useState("index");

  return (
    <Layout
      pageTitle="Developer experience resources"
      pageTitleMuted="I've found"
      pageMiniTitle="Essential resources related to developer experience"
      activePage={activePage}
      setActivePage={setActivePage}
    >
      <Seo title="Dev. Ex. Resources" />
      <Resources linksWithHeaders={devLinks} />
    </Layout>
  );
};

export default DevExResources;
