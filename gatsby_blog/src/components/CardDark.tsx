// React
import React from "react";

// Gatsby
import { Link } from "gatsby";

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
    <Link to={path} className={classes}>
      <h2 className="card-heading-dark">{heading}</h2>
      <p className="excerpt-dark">{excerpt}</p>
    </Link>
  );
};

export default CardDark;
