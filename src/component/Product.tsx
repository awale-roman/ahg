import { Link } from "react-router";
import { capitalizeFirstLetter } from "../helpers/functions";

interface Product {
    id: number,
    images: string[],
    title: string,
    size: string,
    price: number,
    qty: number,
    colors: string[]
}

interface ProductListProps{
    products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({products}) =>{

    return(  
        <div className="container">
            <div  className="product-list">

        { products.map((product, index) => (
            <>
            
            <Link to={`/detailpage/${product.id}`}>
            <div key={index} className="product-item">
               
            <figure>
            <img src={`/assets/image/products/${product.images[0]}`} className="product-img" alt={ product.title} />
            </figure>

            <div className="product-summary">
            <p className="name">{capitalizeFirstLetter(product.title)}</p>
            <p className="size">{"Size: " +  product.size + " cm"}</p>
            <p className="price">{"Rs " + product.price}</p>
            </div>
                </div>
            
            </Link>
            </>
        ))}
            </div>

    </div>
    );
};
  


export default ProductList