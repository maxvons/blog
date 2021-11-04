// React
import React, { useState } from "react";

// Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ResourceCard from "../components/ResourceCard";

// Assets
import {
  textStringDevelopment,
  textStringDesign,
  textStringDevEx,
  textStringCareer,
} from "../assets/textStrings";
import DevIcon from "../assets/dev_icon.svg";
import DesignIcon from "../assets/design_icon.svg";
import DevExIcon from "../assets/devex_icon.svg";
import CareerIcon from "../assets/career_icon.svg";

// Styles
import "../styles/resources.scss";

const ResourcesPage = (props: any) => {
  const [activePage, setActivePage] = useState("index");

  const resourceCards = [
    {
      heading: "Development",
      text: textStringDevelopment,
      linkText: "Go to dev resources",
      altText: "A development icon",
      path: "/dev-resources",
      icon: DevIcon,
    },
    {
      heading: "Design",
      text: textStringDesign,
      linkText: "Go to design resources",
      altText: "A design icon",
      path: "/design-resources",
      icon: DesignIcon,
    },
    {
      heading: "Dev experience",
      text: textStringDevEx,
      linkText: "Go to dev ex resources",
      altText: "A dev ex icon",
      path: "/devex-resources",
      icon: DevExIcon,
    },
    {
      heading: "Career",
      text: textStringCareer,
      linkText: "Go to career resources",
      altText: "A career icon",
      path: "/career-resources",
      icon: CareerIcon,
    },
  ];

  return (
    <Layout
      pageTitle="Useful resources"
      pageTitleMuted="I've found"
      pageMiniTitle="Articles, links, other blogs, and much more"
      activePage={activePage}
      setActivePage={setActivePage}
    >
      <Seo title="Resources" />
      <div className="resources-div">
        {resourceCards.map((resourceCard) => {
          return (
            <ResourceCard
              heading={resourceCard.heading}
              text={resourceCard.text}
              linkText={resourceCard.linkText}
              altText={resourceCard.altText}
              path={resourceCard.path}
              icon={resourceCard.icon}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default ResourcesPage;
