import "./featured-product.styles.scss"

export default function FeaturedProduct (product){
const {title,imageUrl,price} = product;

return(
    <div className="featured-product">
        <div className="featured-image">
        <img src={imageUrl}/>
        </div>
        <div className="name-price" alt="product">
        <h3>
            {title}
        </h3>
        <p>$ {price}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
        </div>
    </div>
)
}