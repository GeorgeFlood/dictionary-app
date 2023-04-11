import React from "react";

const Nouns = ({ definition }) => {
  if (!definition) return null;

  console.log(definition[0]);

  const meaningsNouns = definition[0]?.meanings[0]?.definitions || [];
  const meaningsVerbs = definition[0]?.meanings[1]?.definitions || [];

  const listNouns = meaningsNouns?.map((meaning, index) => (
    <li className="list--items" key={index}>
      {meaning.definition}
    </li>
  ));

  const listVerbs = meaningsVerbs?.map((meaning, index) => (
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
        <ul>{listNouns}</ul>
      </div>
      {synonyms.length > 0 && (
        <div className="synonyms">
          <h3>Synonyms:</h3>
          {synonymsWords}
        </div>
      )}
      {listVerbs.length > 0 && (
        <div className="divider">
          <p className="verb">Verb</p>
          <span></span>
        </div>
      )}
      <div className="nouns--list">
        <ul>{listVerbs}</ul>
      </div>
      <div className="divider">
        <span></span>
      </div>
      <div className="src">
        <p className="src--p">Source:</p>
        <a target="_" href={definition[0].sourceUrls[0]} className="src--src">
          {definition[0].sourceUrls[0]}
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path
            fill="none"
            stroke="#838383"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Nouns;
