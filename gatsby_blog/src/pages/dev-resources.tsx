// React
import React, { useState } from "react";

// Components
import Resources from "../components/Resources";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// Assets
import { devLinks } from "../assets/links";

const DevResources = (props: any) => {
  const [activePage, setActivePage] = useState("index");

  return (
    <Layout
      pageTitle="Dev resources"
      pageTitleMuted="I've found"
      pageMiniTitle="Essential resources related to development"
      activePage={activePage}
      setActivePage={setActivePage}
    >
      <Seo title="Dev Resources" />
      <Resources linksWithHeaders={devLinks} />
    </Layout>
  );
};

export default DevResources;
