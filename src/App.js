import {Routes,Route} from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import HomePage from "./Components/home-page";
import NotFound from "./Components/not-fund";
import Shop from "./Components/pages/shop/shop";
import SingleProduct from "./Components/single-product/single-product";


function App() {
  return <div className="App">
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </div>;
}

export default App;
