import "./App.css";
import Gif from "./components/GiphyWithSearch";
function App() {
  return (
    <div className="wrapper">
      <form>
        <input className="input-text" type="text" name="search" />
        <button className="search-button" type="button">
          Search
        </button>
      </form>
      <Gif />
    </div>
  );
}

export default App;
