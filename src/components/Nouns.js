import React from "react";

const Nouns = ({ definition }) => {
  if (!definition) return null;

  console.log(definition[0].meanings[0].synonyms);

  const meanings = definition[0].meanings[0].definitions;

  const listItems = meanings.map((meaning, index) => (
    <li className="list--items" key={index}>
      {meaning.definition}
    </li>
  ));

  const synonyms = definition[0].meanings[0].synonyms || [];

  const synonymsWords = synonyms.map((words, index) => (
    <p className="synonymsWords" key={index}>
      {words}
    </p>
  ));

  return (
    <div className="nouns">
      <h3>Meanings</h3>
      <div className="nouns--list">
        <ul>{listItems}</ul>
      </div>
      {synonyms.length > 0 && (
        <div className="synonyms">
          <h3>Synonyms</h3>
          {synonymsWords}
        </div>
      )}
      <div className="divider">
        <p className="verb">Verb</p>
        <span></span>
      </div>
    </div>
  );
};

export default Nouns;
