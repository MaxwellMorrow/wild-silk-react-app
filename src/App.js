import "./App.scss";
import Header from "./Components/header/header.jsx";
import Hero from "./Components/hero/hero.jsx";
import MainSection from "./Components/main-section/main-section";
import FeaturedCollection from "./Components/featured-collection/featured-collection";
import Footer from "./Components/footer/footer";

function App() {
  return <div className="App">
  <Header/>
  <Hero/>
  <MainSection/>
  <FeaturedCollection/>
  <Footer/>
  </div>;
}

export default App;
