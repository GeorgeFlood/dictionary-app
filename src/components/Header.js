import React from "react";

const Header = ({ definition }) => {
  return (
    <>
      {definition && (
        <div>
          <div className="header">
            <div className="word--container">
              <h1 className="header--title">{definition[0].word}</h1>
              <p className="header--sub">{definition[0].phonetic}</p>
            </div>
            <div className="header--play">
              <a target="_" href={definition[0].sourceUrls[0]}>
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
              </a>
            </div>
          </div>
          <div className="divider">
            <p>Noun</p>
            <span></span>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
