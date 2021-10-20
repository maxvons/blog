// React
import React, { useState } from "react";

// Components
import NavbarElem from "../components/NavbarElem";

// Styles
import "../styles/navbar.scss";

const Navbar = (props) => {
  const { activePage, setActivePage } = props;

  const [navOpen, setNavOpen] = useState(false);

  const setActivePageAndCache = (page: string): void => {
    sessionStorage.setItem("activePage", page);
    setActivePage(page);
  };

  if (navOpen) {
    return (
      <nav className="navbar nav-open">
        <div className="nav-div">
          <NavbarElem
            elem="home"
            path="/"
            clickEvent={() => setActivePageAndCache("home")}
          />
          <div className="nav-text-div">
            <NavbarElem
              elem="posts"
              text="All posts"
              path="/posts"
              clickEvent={() => setActivePageAndCache("posts")}
              rightMargin
            />
            <NavbarElem
              elem="resources"
              text="Recommended resources"
              path="/resources"
              clickEvent={() => setActivePageAndCache("resources")}
            />
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar nav-closed">
        <div className="nav-div">
          <NavbarElem
            elem="home"
            path="/"
            active={"home" === activePage}
            clickEvent={() => setActivePageAndCache("home")}
          />
          <div className="nav-text-div">
            <NavbarElem
              elem="posts"
              text="All posts"
              path="/posts"
              active={"posts" === activePage}
              clickEvent={() => setActivePageAndCache("posts")}
              rightMargin
            />
            <NavbarElem
              elem="resources"
              text="Recommended resources"
              path="/resources"
              active={"resources" === activePage}
              clickEvent={() => setActivePageAndCache("resources")}
            />
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
