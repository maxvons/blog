// React
import React from "react";

// Components
import CardDark from "../components/CardDark";
import Card from "../components/Card";

// Styles
import "../styles/landing.scss";

const Landing = () => {
  return (
    <div className="landing-div">
      <div className="giving-back-div">
        <h2 className="heading">
          <span className="muted">After years of learning from others</span> I
          felt like giving back.
        </h2>
        <p className="normal-text margin-bottom">
          By combining what others have thought me with my own experiences and
          expertise, I hope to educate and give back to the community with this
          page.
        </p>
        <p className="normal-text">
          Here you can read no-nonsense guides on technical topics, take a look
          at my developer gear recommendations, and check out useful resources
          I’ve found on the web.
        </p>
      </div>
      <div className="two-choices-wrapper">
        <div className="two-choices-div">
          <div className="two-choices-text-div">
            <h2 className="heading light">
              Two choices,{" "}
              <span className="muted-light">unlimited possibilities.</span>
            </h2>
            <p className="normal-text light">
              Feel free to check out all my blog posts to date, or take a look
              at the resources that gave me the tools and knowledge necessary to
              write them.
            </p>
          </div>
          <div className="two-choices-cards-div">
            <CardDark
              heading="Check out all my blog posts"
              excerpt="Technical articles, gear reccomendations, fun stuff I’ve learned, and more."
              path="/posts"
              rightMargin
            />
            <CardDark
              heading="Check out my useful resources"
              excerpt="Articles, links, and other blogs related to development, design, DX, and more."
              path="/resources"
            />
          </div>
        </div>
      </div>
      <div className="article-div">
        <h2 className="heading margin-bottom-large">
          <span className="muted">Or you can simply</span> start reading my
          newest article right here.
        </h2>
        <Card
          heading="How to learn JavaScript"
          datePosted="Fri, 20.08.2021"
          minRead={14}
          tags={["Development", "Coding"]}
          excerpt="My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there.
      "
          marginBottom="margin-bottom-very-large"
          path="/learn-javascript"
        />
      </div>
    </div>
  );
};

export default Landing;
