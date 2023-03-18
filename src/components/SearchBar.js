import React from "react";
import { useState } from "react";

const SearchBar = ({ getDefinition }) => {
  const [word, setWord] = useState("");

  const handleWordSubmit = (e) => {
    e.preventDefault();
    getDefinition(word);
  };

  const handleOnChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleWordSubmit}>
        <div className="search-container">
          <input
            onChange={handleOnChange}
            className="search"
            type="text"
            placeholder="Search..."
          />
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
