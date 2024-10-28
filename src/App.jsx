import Articles from "./components/Articles";
import Clients from "./components/Clients";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Articles />
      <Gallery />
      <Work/>
      <Clients/>
      <Movies/>
      <Services/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;