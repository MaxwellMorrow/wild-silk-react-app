import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/products-context";
import Layout from "../shared/layout";
import "./single-product.styles.scss";

// these hooks should be the key to updating this code to react-router v6 
// import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";



// some of this is depreciated code from react-router-v5 I need to work on updating this to V6 
// match, history: { push } these parts I think are particularly broken.
// im getting an error on push in the console so I think im getting closer
export default function SingleProduct({ match, history: { push } }) {
  // this pulls in our products data 
  const { products } = useContext(ProductsContext);

  // idk if this is working actually my gut says no 
  const { id } = match.params;

  console.log("Id",id)
  console.log("match params",match.params)


  // this allows us to set the product we want to display individually 
  const [product, setProduct] = useState(null);

  // I dont think this is working we have no product displaying 
  useEffect(() => {

    // this .find function goes through the products array and tries to match with the product ID
    // since I dont think the const { id } = match.params; is working above I think this is also broken part of our problem
    const product = products.find((item) => Number(item.id) === Number(id));
   
    // if product doesnt exist redirect to shop
    if (!product) {
      // think this is depreciated not sure 
      // its the source of some errors in the console
      return push("/shop");
    }
    // using our useState hook to set the product to the one matched by the .find
    setProduct(product);
  }, 
  // dependency array that runs the useEffect if any of this changes yada-yada
  [id,product,push, products]);

  // this is here for when the product has not loaded yet to let things actually run. We could do a loading effect here in the future. 
  if (!product) {
    return null;
  }
  // destructing our product to get the things we need out of it to lead into our jsx below
  // I know this isnt working properly because our page is blank and that means these values dont exist.
  const { imgURL, title, price, description } = product;

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imgURL} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="add-to-cart-btns">
            <button
              className="button is-white nomad-btn"
              id="btn-white-outline"
            >
              ADD TO CART
            </button>
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="product-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
