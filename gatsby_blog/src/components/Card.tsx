// React
import React from "react";

// Gatsby
import { Link } from "gatsby";

// Assets
import ArrowIcon from "../assets/arrow_icon.svg";
import CoffeeIcon from "../assets/coffee_icon.svg";
import { getCoffeeCups } from "../utilityFunctions";

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
  noShadow?: boolean;
}

const Card = ({
  heading = "How to learn JavaScript",
  datePosted = "Fri, 20.08.2021",
  minRead = 14,
  tags = ["Development", "Coding"],
  excerpt = "The best way to learn JavaScript is to read this blog.",
  path = "/learn-javascript",
  marginBottom = undefined,
  newlyPosted = false,
  noShadow = false,
}: CardProps) => {
  const cardClasses = `card ${marginBottom && marginBottom} ${
    noShadow && "no-shadow"
  }`;

  const coffeeCups = getCoffeeCups(minRead);
  const coffeeCupIcons: Array<string> = [];

  for (let i = 0; i < coffeeCups; i++) {
    coffeeCupIcons.push(CoffeeIcon);
  }

  return (
    <Link to={path}>
      <div className={cardClasses}>
        {newlyPosted && <p className="new">New</p>}
        <h2 className="card-heading">{heading}</h2>
        <div className="secondary-information-div">
          <p className="secondary-information margin-right-small">
            {datePosted}
          </p>
          <div className="min-read-div">
            {coffeeCupIcons.map((coffeeIcon: string, index: number) => {
              if (index === coffeeCupIcons.length - 1) {
                return (
                  <img key={index} src={coffeeIcon} alt="Coffee cup icon" />
                );
              } else {
                return (
                  <img
                    key={index}
                    className="margin-right-mini"
                    src={coffeeIcon}
                    alt="Coffee cup icon"
                  />
                );
              }
            })}
            <p className="secondary-information margin-left-very-small">
              {minRead} min read{" "}
            </p>
          </div>
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
        <p className="read-article-button">
          <span className="read-article-text">Read article</span>
          <img
            className="read-article-icon"
            alt="Read article icon"
            src={ArrowIcon}
          ></img>
        </p>
      </div>
    </Link>
  );
};

export default Card;
