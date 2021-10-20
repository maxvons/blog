// React
import React from "react";
import { MouseEventHandler } from "react";

// Gatsby
import { Link } from "gatsby";

// Assets
import LogoImg from "../assets/logo.svg";

// Styles
import "../styles/navbarelem.scss";

interface NavbarElemProps {
  elem: string;
  text?: string;
  path: string;
  clickEvent: MouseEventHandler;
  rightMargin?: boolean;
}

const NavbarElem = ({
  elem = "",
  text = "",
  path = "/",
  clickEvent = () => console.log(this, "was clicked"),
  rightMargin = false,
}: NavbarElemProps) => {
  const getCurrentPage = (): string => {
    const url = location.href ? location.href : "";
    const splitUrl = url.split("/");
    const currentPage = `/${splitUrl[splitUrl.length - 1]}`;

    return currentPage;
  };

  const currentPage = getCurrentPage();
  const active = path === currentPage;
  console.log(currentPage);
  const classes = `navbar-link ${active && "active"} ${
    rightMargin && "right-margin"
  }`;

  if (active) {
    return (
      <Link to={path} className={classes}>
        {elem === "home" ? (
          <img
            src={LogoImg}
            height="50"
            width="50"
            alt="A black circle with the letter 'M' inside"
          />
        ) : (
          text
        )}
      </Link>
    );
  } else {
    return (
      <Link to={path} className={classes} onClick={clickEvent}>
        {elem === "home" ? (
          <img
            src={LogoImg}
            height="50"
            width="50"
            alt="A black circle with the letter 'M' inside"
          />
        ) : (
          text
        )}
      </Link>
    );
  }
};

export default NavbarElem;
