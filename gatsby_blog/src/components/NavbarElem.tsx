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
  text: string;
  active: boolean;
  clickEvent: MouseEventHandler;
  rightMargin?: boolean;
}

const NavbarElem = ({
  elem = "",
  text = "",
  active = false,
  clickEvent = undefined,
  rightMargin = false,
}: NavbarElemProps) => {
  const classes = `navbar-link ${active && "active"} ${
    rightMargin && "right-margin"
  }`;

  if (active) {
    return (
      <a className={classes}>
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
      </a>
    );
  } else {
    return (
      <a className={classes} onClick={clickEvent}>
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
      </a>
    );
  }
};

export default NavbarElem;
