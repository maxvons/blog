// React
import React from "react";

// Styles
import "../styles/link_card.scss";

interface LinkObject {
  linkText: string;
  path: string;
}

interface LinkCardProps {
  heading: string;
  links: Array<LinkObject>;
}

const LinkCard = ({
  heading = "Everything you need to create a React app",
  links = [
    {
      linkText: "Tutorial: Intro to React",
      path: "https://reactjs.org/tutorial/tutorial.html",
    },
  ],
}: LinkCardProps) => {
  return (
    <div className="link-card">
      <h2 className="link-card-heading">{heading}</h2>
      <ul className="link-list">
        {links.map((link) => (
          <li className="link-ele">
            <a
              className="link-card-link"
              href={link.path}
              title={`Go to ${link.linkText}`}
            >
              {link.linkText}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkCard;
