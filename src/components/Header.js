import React from "react";

const Header = ({ definition }) => {
  console.log(definition);
  return (
    <div className="header">
      <div className="word--container">
        <h1 className="header--title">
          {definition ? definition[0].word : ""}
        </h1>
        <p className="header--sub">
          {definition ? definition[0].phonetic : ""}
        </p>
      </div>
      <div className="header--play">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
        >
          <g fill="#A445ED" fill-rule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
