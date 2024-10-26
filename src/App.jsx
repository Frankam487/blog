import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Articles />
      <Gallery />
      <Work/>
    </div>
  );
}

export default App;