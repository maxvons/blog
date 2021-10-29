// React
import React from "react";

// Gatsby
import { Link } from "gatsby";

// Assets
import ArrowIcon from "../assets/arrow_icon.svg";

// Styles
import "../styles/resource_card.scss";

interface ResourceCardProps {
  heading: string;
  text: string;
  linkText: string;
  altText: string;
  path: string;
  icon: string;
}

const ResourceCard = ({
  heading = "How to learn JavaScript",
  text = "Web development, image optimization, software architecture, libraries, git, various small tutorials, and more.",
  linkText = "Go to dev resources",
  altText = "A development icon",
  path = "/dev-resources",
  icon = "../assets/dev_icon.svg",
}: ResourceCardProps) => {
  return (
    <Link to={path}>
      <div className="resource-card">
        <div className="card-heading-div">
          <h2 className="card-heading margin-right-small">{heading}</h2>
          <img className="card-icon" src={icon} alt={altText} />
        </div>
        <p className="excerpt">{text}</p>
        <p className="read-article-button">
          <span className="read-article-text">{linkText}</span>
          <img
            className="read-article-icon"
            alt={linkText}
            src={ArrowIcon}
          ></img>
        </p>
      </div>
    </Link>
  );
};

export default ResourceCard;
