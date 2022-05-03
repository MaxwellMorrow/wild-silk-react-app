// dis be helpin



export const isInCart = (product, cartItems) => {
    // loops over the cart to confirm what items are inside of it matching cartItem.id with product.id
return cartItems.find(item => item.id === product.id);
}


