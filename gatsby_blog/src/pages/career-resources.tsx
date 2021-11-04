// React
import React, { useState } from "react";

// Components
import Resources from "../components/Resources";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// Assets
import { devLinks } from "../assets/links";

const CareerResources = (props: any) => {
  const [activePage, setActivePage] = useState("index");

  return (
    <Layout
      pageTitle="Career resources"
      pageTitleMuted="I've found"
      pageMiniTitle="Essential resources related to career"
      activePage={activePage}
      setActivePage={setActivePage}
    >
      <Seo title="Career Resources" />
      <Resources linksWithHeaders={devLinks} />
    </Layout>
  );
};

export default CareerResources;
