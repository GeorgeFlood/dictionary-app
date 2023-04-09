import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, SetisOpen] = useState(false);
  const [font, SetFont] = useState("Sans-serif");

  const fontStyle = {
    fontFamily: font,
  };

  console.log(fontStyle.fontFamily);

  useEffect(() => {
    document.body.style.fontFamily = fontStyle.fontFamily;
  }, [fontStyle.fontFamily]);

  const handleSvgClick = () => {
    SetisOpen(!isOpen);
  };

  const handleFontClick = (e) => {
    const selectedFont = e.target.innerHTML;
    SetFont(selectedFont);
  };

  return (
    <div className="container">
      <div>
        <svg
          className="logo"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="38"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#838383"
            stroke-linecap="round"
            stroke-width="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
      </div>
      <div className="options">
        <div className="font-style">
          <p>{font}</p>
          <svg
            className="font-style__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            onClick={handleSvgClick}
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeWidth="1.5"
              d="m1 1 6 6 6-6"
            />
          </svg>
        </div>
        {isOpen && (
          <div className={isOpen ? "dropdown-menu" : "no-menu"}>
            <ul>
              <li onClick={handleFontClick}>Sans-Serif</li>
              <li onClick={handleFontClick}>Inconsolata</li>
              <li onClick={handleFontClick}>inter</li>
              <li onClick={handleFontClick}>Lora</li>
            </ul>
          </div>
        )}
        <div className="night-mode">
          <label>
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
