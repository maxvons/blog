// React
import React from "react";

// Gatsby
import { Link } from "gatsby";

// Assets
import ArrowIcon from "../assets/arrow_icon.svg";

// Styles
import "../styles/card.scss";

interface CardProps {
  heading: string;
  datePosted: string;
  minRead: number;
  tags: Array<string>;
  excerpt: string;
  path: string;
  marginBottom?: string;
  newlyPosted?: boolean;
}

const Card = ({
  heading = "How to learn JavaScript",
  datePosted = "Fri, 20.08.2021",
  minRead = 14,
  tags = ["Development", "Coding"],
  excerpt = "The best way to learn JavaScript is to read this blog.",
  path = "/learn-javascript",
  marginBottom = "margin-bottom-large",
  newlyPosted = false,
}: CardProps) => {
  const cardClasses = `card ${marginBottom && marginBottom}`;

  return (
    <div className={cardClasses}>
      {newlyPosted && <p className="new">New</p>}
      <h2 className="card-heading">{heading}</h2>
      <div className="secondary-information-div">
        <p className="secondary-information right-margin-small">{datePosted}</p>
        <p className="secondary-information">{minRead} min read</p>
      </div>
      <div className="tags-div">
        {tags.map((tag) => {
          return (
            <p key={tag} className="tag">
              {tag}
            </p>
          );
        })}
      </div>
      <p className="excerpt">{excerpt}</p>
      <Link to={path} className="read-article-button">
        <span className="read-article-text">Read article </span>
        <img
          className="read-article-icon"
          alt="Read article icon"
          src={ArrowIcon}
        ></img>
      </Link>
    </div>
  );
};

export default Card;
