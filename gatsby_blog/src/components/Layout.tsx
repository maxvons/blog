// React
import React from "react";

// Components
import Navbar from "./Navbar";

// Styles
import "../styles/layout.scss";

interface PageTitleProps {
  pageTitle: string;
  pageTitleMuted?: string;
  pageMiniTitle?: string;
  pageMiniTitlePrimary?: string;
}

const PageTitle = ({
  pageTitle = "What I've learned",
  pageTitleMuted,
  pageMiniTitle,
  pageMiniTitlePrimary,
}: PageTitleProps) => {
  return (
    <div className="page-title">
      <p className="mini-title">
        {pageMiniTitle}{" "}
        <span className="primary-color">{pageMiniTitlePrimary}</span>
      </p>
      <h1 className="main-title">
        {pageTitle} <br></br>
        <span className="muted">{pageTitleMuted}</span>
      </h1>
    </div>
  );
};

interface LayoutProps {
  children: any;
  pageTitle: string;
  pageTitleMuted?: string;
  pageMiniTitle: string;
  pageMiniTitlePrimary?: string;
  mutedFirst?: boolean;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}
const Layout = ({
  children = "",
  pageTitle = "What I've learned",
  pageTitleMuted,
  pageMiniTitle,
  pageMiniTitlePrimary,
  activePage = "index",
  setActivePage = () => console.log(this),
}: LayoutProps) => {
  return (
    <div className="layout">
      <header className="header">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <PageTitle
          pageTitle={pageTitle}
          pageTitleMuted={pageTitleMuted}
          pageMiniTitle={pageMiniTitle}
          pageMiniTitlePrimary={pageMiniTitlePrimary}
        />
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        Made with ❤️ by{" "}
        <span className="primary-color">Maximilian von Stephanides</span>
      </footer>
    </div>
  );
};

export default Layout;
