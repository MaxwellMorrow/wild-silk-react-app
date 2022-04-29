import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/products-context";
import Layout from "../shared/layout";
import "./single-product.styles.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


// some of this is depreciated code from react-router-v5 I need to work on updating this to V6 

export default function SingleProduct({ match, history: { push } }) {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    // if product doesnt exist redirect to shop
    if (!product) {

      // think this is depreciated 
      return push("/shop");
    }
    setProduct(product);
  }, [id,product,push, products]);

  if (!product) {
    return null;
  }
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
