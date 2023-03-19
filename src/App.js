import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import getDefinition from "./API";
import "./styles/main.css";

function App() {
  const [definition, setDefinition] = useState({});

  const handleDefinitionData = async (data) => {
    await getDefinition(data).then((data) => {
      setDefinition(data);
    });
  };

  // console.log(definition[0].word);

  return (
    <div className="App">
      <Navbar />
      <SearchBar handleDefinitionData={handleDefinitionData} />
    </div>
  );
}

export default App;
