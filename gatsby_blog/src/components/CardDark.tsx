// React
import React from "react";

// Styles
import "../styles/card_dark.scss";

interface CardDarkProps {
  heading: string;
  excerpt: string;
  path: string;
  rightMargin?: boolean;
}

const CardDark = ({
  heading = "Check out all my blog posts",
  excerpt = "Technical articles, gear reccomendations, fun stuff I’ve learned, and more.",
  path = "/learn-javascript",
  rightMargin,
}: CardDarkProps) => {
  const classes = `card-dark ${rightMargin && "right-margin-large"}`;

  return (
    <a className={classes} href={path}>
      <h2 className="card-heading-dark">{heading}</h2>
      <p className="excerpt-dark">{excerpt}</p>
    </a>
  );
};

export default CardDark;
