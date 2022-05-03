import "./featured-product.styles.scss";
import { isInCart } from "../../helpers";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
// need to figure out how to update this to react-router v6
// import {withRouter} from "react-router-dom";

export default function FeaturedProduct(props) {
  // this was included in destructuring the props but I think its deprecated.
  // const {history} = props;

  const { title, imageUrl, price, id, description } = props;
  const product = { title, imageUrl, price, id, description };
  const { addProduct, cartItems } = useContext(CartContext);

  return (
    <div className="featured-product">
      <div className="featured-image">
        <img src={imageUrl} alt="product"/>
      </div>
      <div className="name-price" alt="product">
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!isInCart(product, cartItems) && (
          <button
            className="button is-black nomad-btn"
            onClick={() => addProduct(product)}
          >
            ADD TO CART
          </button>
        )}
        {isInCart(product, cartItems) && (
          <button
            className="button is-black nomad-btn"
            id="btn-white-outline"
            onClick={() => {}}
          >
            ADD MORE
          </button>
        )}
        
      </div>
    </div>
  );
}
