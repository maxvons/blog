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
}

const CardDark = ({
  heading = "Check out all my blog posts",
  excerpt = "Technical articles, gear reccomendations, fun stuff I’ve learned, and more.",
  path = "/learn-javascript",
}: CardDarkProps) => {
  return (
    <Link to={path} className="card-dark">
      <h2 className="card-heading-dark">{heading}</h2>
      <p className="excerpt-dark">{excerpt}</p>
    </Link>
  );
};

export default CardDark;
