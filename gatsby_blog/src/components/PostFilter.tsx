// React
import React from "react";

// Assets
import SearchIcon from "../assets/search_icon.svg";

// Styles
import "../styles/post_filter.scss";

interface PostFilterProps {
  searchString: string;
  setSearchString: (searchValue: string) => void;
  activeTags: Array<string>;
  setActiveTags: (tags: Array<string>) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const PostFilter = (props: PostFilterProps) => {
  const {
    searchString,
    setSearchString,
    activeTags,
    setActiveTags,
    sortBy,
    setSortBy,
  } = props;
  const tags: Array<string> = [
    "Development",
    "Review",
    "Career",
    "Tech",
    "Life",
  ];
  const sortByValues: Array<string> = ["last posted", "most read", "length"];

  const updateActiveTags = (tagPressed: string): void => {
    let updatedTags: Array<string> = activeTags.slice();
    if (activeTags.includes(tagPressed)) {
      updatedTags = activeTags.filter((tag) => tag != tagPressed);
    } else {
      updatedTags.push(tagPressed);
    }

    setActiveTags(updatedTags);
  };

  return (
    <div className="filter-div">
      <div className="sort-div">
        <div id="sortby" className="sort-buttons">
          {sortByValues.map((sortValue: string, index: number) => {
            const active = sortValue === sortBy;
            const rightMargin = index !== sortByValues.length - 1;

            return (
              <input
                key={sortValue}
                type="button"
                className={`sort-button ${active && "active-sort"} ${
                  rightMargin && "margin-right-small"
                }`}
                value={sortValue}
                onClick={() => setSortBy(sortValue)}
              />
            );
          })}
        </div>
      </div>
      <div className="filter-tags-div">
        {tags.map((tag: string, index: number) => {
          const active = activeTags.includes(tag) ? true : false;
          const rightMargin = index !== tags.length - 1;

          return (
            <input
              key={tag}
              className={`filter-tag ${active && "active-tag"} ${
                rightMargin && "margin-right-small"
              }`}
              type="button"
              value={tag}
              onClick={() => updateActiveTags(tag)}
            />
          );
        })}
      </div>
      <div className="search-div">
        <input
          className="search-input"
          type="search"
          id="search"
          name="search"
          placeholder="Search for anything you want..."
          onChange={(ev) => setSearchString(ev.target.value)}
        />
        <label htmlFor="search">
          <img src={SearchIcon} alt="A red search icon" />
        </label>
      </div>
    </div>
  );
};

export default PostFilter;
