import {Routes,Route} from "react-router-dom"
import "./App.scss";
import HomePage from "./Components/home-page";
import NotFound from "./Components/not-fund";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  </div>;
}

export default App;
