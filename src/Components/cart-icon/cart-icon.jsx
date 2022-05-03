import shoppingBag from "../../assets/shopping-bag.png";
import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";


export default function CartIcon(){
    const {itemCount, cartItems} = useContext(CartContext);
    console.log("CartItems:",cartItems)
    return (
        <div className="cart-container">
            <img src={shoppingBag} alt="shopping-cart-icon"/>
            {
                itemCount > 0 ?  <span className="cart-count">{itemCount}</span> : null
            }
           
        </div>
    )
}
