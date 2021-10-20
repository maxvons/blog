// React
import React, { useState } from "react";

// Components
import NavbarElem from "../components/NavbarElem";

// Styles
import "../styles/navbar.scss";

const Navbar = (props) => {
  const { activePage, setActivePage } = props;

  const [navOpen, setNavOpen] = useState(false);

  const navbarElems = ["home", "posts", "resources"];
  const navbarElemMap: Map<string, string> = new Map();
  const navbarLinksMap: Map<string, string> = new Map();

  navbarElemMap.set("home", "Go home");
  navbarElemMap.set("posts", "All posts");
  navbarElemMap.set("resources", "Recommended resources");

  navbarLinksMap.set("home", "/");
  navbarLinksMap.set("posts", "/posts");
  navbarLinksMap.set("resources", "/resources");

  const setActivePageAndCache = (page: string): void => {
    sessionStorage.setIem("activePage", page);
    setActivePage(page);
  };

  if (navOpen) {
    return (
      <nav className="navbar nav-open">
        <div className="nav-div">
          <NavbarElem
            elem="home"
            text={navbarElemMap.get("home")}
            active={"home" === activePage}
            clickEvent={() => setActivePageAndCache("home")}
          />
          <div className="nav-text-div">
            <NavbarElem
              elem="posts"
              text={navbarElemMap.get("posts")}
              active={"posts" === activePage}
              clickEvent={() => setActivePageAndCache("posts")}
              rightMargin
            />
            <NavbarElem
              elem="resources"
              text={navbarElemMap.get("resources")}
              active={"resources" === activePage}
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
            text={navbarElemMap.get("home")}
            active={"home" === activePage}
            clickEvent={() => setActivePageAndCache("home")}
          />
          <div className="nav-text-div">
            <NavbarElem
              elem="posts"
              text={navbarElemMap.get("posts")}
              active={"posts" === activePage}
              clickEvent={() => setActivePageAndCache("posts")}
              rightMargin
            />
            <NavbarElem
              elem="resources"
              text={navbarElemMap.get("resources")}
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
