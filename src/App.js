import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import getDefinition from "./API";
import "./styles/main.css";

function App() {
  console.log(getDefinition());
  return (
    <div className="App">
      <Navbar />
      <SearchBar getDefinition={getDefinition} />
    </div>
  );
}

export default App;
