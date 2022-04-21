import {Routes,Route} from "react-router-dom"
import "./App.scss";
import HomePage from "./Components/home-page";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<HomePage/>}/>

    </Routes>
  </div>;
}

export default App;
