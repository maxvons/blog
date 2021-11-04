// React
import React from "react";

// Components
import LinkCard from "../components/LinkCard";

interface LinkObject {
  linkText: string;
  path: string;
}

interface LinkCollection {
  heading: string;
  links: Array<LinkObject>;
}

interface ResourcesProps {
  linksWithHeaders: Array<LinkCollection>;
}

const Resources = ({ linksWithHeaders }: ResourcesProps) => {
  return (
    <div className="resources-div">
      {linksWithHeaders.map((linkCollection) => {
        return (
          <LinkCard
            heading={linkCollection.heading}
            links={linkCollection.links}
          />
        );
      })}
    </div>
  );
};

export default Resources;
