// React
import React, { useState } from "react";

// Components
import Resources from "../components/Resources";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// Assets
import { devLinks } from "../assets/links";

const DesignResources = (props: any) => {
  const [activePage, setActivePage] = useState("index");

  return (
    <Layout
      pageTitle="Design resources"
      pageTitleMuted="I've found"
      pageMiniTitle="Essential resources related to design"
      activePage={activePage}
      setActivePage={setActivePage}
    >
      <Seo title="Design Resources" />
      <Resources linksWithHeaders={devLinks} />
    </Layout>
  );
};

export default DesignResources;
