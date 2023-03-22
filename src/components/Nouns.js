import React from "react";

const Nouns = ({ definition }) => {
  const meanings = definition ? definition[0].meanings[0].definitions : [];

  const listItems = meanings.map((meaning, index) => (
    <li className="list--items" key={index}>
      {meaning.definition}
    </li>
  ));

  return (
    <div className="nouns">
      <h3>Meanings</h3>
      <div className="nouns--list">
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default Nouns;
