// React
import React, { useState } from "react";

// Gatsby
import { Link, graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Card from "../components/Card";
import PostFilter from "../components/PostFilter";

// Styles
import "../styles/posts.scss";

const PostsPage = (props: any) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  console.log(typeof posts);

  const [activePage, setActivePage] = useState("index");
  const [searchString, setSearchString] = useState("");
  const [activeTags, setActiveTags] = useState([
    "Development",
    "Review",
    "Career",
    "Tech",
    "Life",
  ]);
  const [sortBy, setSortBy] = useState("last posted");

  const containsAtLeastOneTag = (
    tagList: Array<string>,
    posts: Array<any>
  ): boolean => {
    console.log(posts);
    return tagList.some((tag) => activeTags.includes(tag));
  };

  let postIdWithSearchResult = {};
  posts.forEach((post: any) => {
    const id = post.node.id;
    postIdWithSearchResult = { ...postIdWithSearchResult, [id]: true };
  });

  const containsSearchResult = (
    postContent: string,
    postTitle: string
  ): boolean => {
    if (searchString === "") {
      return true;
    }

    const contentWordsLowerCase = postContent
      .split(" ")
      .map((contentWord) => contentWord.toLowerCase());
    const titleWordsLowerCase = postTitle
      .split(" ")
      .map((titleWord) => titleWord.toLowerCase());
    const searchWordsLowerCase = searchString
      .split(" ")
      .map((searchWord) => searchWord.toLowerCase());

    return contentWordsLowerCase.some(
      (word) =>
        searchWordsLowerCase.some((searchWord) =>
          searchForWord(word, searchWord)
        ) ||
        titleWordsLowerCase.some((word) =>
          searchWordsLowerCase.some((searchWord) =>
            searchForWord(word, searchWord)
          )
        )
    );
  };

  const searchForWord = (word: string, searchWord: string): boolean => {
    return word.startsWith(searchWord);
  };

  const compareLength = (excerpt1: string, excerpt2: string) => {
    if (excerpt1.length < excerpt2.length) {
      return 1;
    } else if (excerpt1.length === excerpt2.length) {
      return 0;
    } else {
      return -1;
    }
  };

  const compareDates = (dateString1: string, dateString2: string) => {
    const monthsWithNumbers = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };

    const dateString1Split = dateString1.split(" ");
    const dateString1NoComma = [
      dateString1Split[0],
      dateString1Split[1].split(",")[0],
      dateString1Split[2],
    ];

    const dateString2Split = dateString2.split(" ");
    const dateString2NoComma = [
      dateString2Split[0],
      dateString2Split[1].split(",")[0],
      dateString2Split[2],
    ];

    const year1 = parseInt(dateString1NoComma[2]);
    const month1String = dateString1NoComma[1];
    const month1 = monthsWithNumbers[month1String];
    const day1 = parseInt(dateString1NoComma[0]);

    const year2 = parseInt(dateString2NoComma[2]);
    const month2String: string = dateString2NoComma[1];
    const month2 = monthsWithNumbers[month2String];
    const day2 = parseInt(dateString2NoComma[0]);

    console.log(
      { year1 },
      { month1 },
      { day1 },
      { year2 },
      { month2 },
      { day2 }
    );

    if (year1 > year2) {
      return -1;
    } else if (year1 === year2) {
      if (month1 > month2) {
        return -1;
      } else if (month1 === month2) {
        if (day1 > day2) {
          return -1;
        } else if (day1 === day2) {
          return 0;
        } else {
          return 0;
        }
      } else if (month1 < month2) {
        return 1;
      }
    } else {
      return 0;
    }
  };

  return (
    <Layout
      pageTitle="All the posts"
      pageTitleMuted="I've written"
      pageMiniTitle="All the posts I've written so far"
      activePage={activePage}
      setActivePage={setActivePage}
    >
      <Seo title="Posts" />
      <div className="post-div">
        <PostFilter
          setSearchString={setSearchString}
          activeTags={activeTags}
          setActiveTags={setActiveTags}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <div className="blog-posts">
          {posts
            .sort(function (a: any, b: any) {
              switch (sortBy) {
                case "last posted": {
                  return compareDates(
                    a.node.frontmatter.date,
                    b.node.frontmatter.date
                  );
                }
                case "length": {
                  return compareLength(a.node.excerpt, b.node.excerpt);
                }
                case "most read": {
                  return compareLength(b.node.excerpt, a.node.excerpt);
                }
              }
            })
            .filter(
              (post: any) =>
                post.node.frontmatter.title.length > 0 &&
                containsAtLeastOneTag(post.node.frontmatter.tags, posts) &&
                containsSearchResult(
                  post.node.excerpt,
                  post.node.frontmatter.title
                )
            )
            .map(({ node: post }) => {
              return (
                <Card
                  key={post.id}
                  heading={post.frontmatter.title}
                  datePosted={post.frontmatter.date}
                  minRead={post.frontmatter.minRead}
                  tags={post.frontmatter.tags}
                  excerpt={post.excerpt}
                  path={post.frontmatter.path}
                  noShadow
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            minRead
            tags
            path
          }
        }
      }
    }
  }
`;

export default PostsPage;
