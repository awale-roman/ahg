import { FaMinus, FaPlus } from "react-icons/fa";

import Footer from "../component/footer";
import Header from "../component/Header";
import { capitalizeFirstLetter } from "../helpers/functions";
import products from "../helpers/data";
import { useParams } from "react-router";
import { useState } from "react";

const DetailPage = () => {
  const [counter, setCounter] = useState(1);
  const [decreaseButtonDisability, setDecreaseButtonDisability] = useState(false)
  const [increaseButtonDisability, setIncreaseButtonDisability] = useState(false)
  const { productId } = useParams();
  const productIdToString = Number(productId)
  const selectedProduct = products.find((product: any) => product.id === productIdToString)


  const handleIncrement = (maxQty: number) => {

    setCounter(counter + 1)
    setDecreaseButtonDisability(false)
    if (counter === (maxQty - 1)) {
      setIncreaseButtonDisability(true)
    }
  }

  const handleDecrement = () => {
    setCounter(counter => counter - 1)
    if (counter < 2) {
      setDecreaseButtonDisability(true)
    }
    setIncreaseButtonDisability(false)
  }



  const calculateTotal = (quantity: number, productPrice: number) => {
    return quantity * productPrice
  }

  if (!selectedProduct) {
    return <p>Product not found</p>; 
}


  return (
    <>
      <Header />
    <div className="product-detail-wrapper">

            <div className="container">

          <div className="product-detail">
            <div className="product-images">
              {/* Bigger Images */}
              {!!selectedProduct?.images && selectedProduct.images.length > 0 && selectedProduct?.images.map((image, index) => (
                
                  <figure key={index} id={`${selectedProduct?.title}-img-${index}`}>
                    <img src={`/assets/image/products/${image}`} className="product-img" alt={`${selectedProduct?.title}}`} />
                  </figure>
                 
                
              ))}

              <div className="thumbs">
              {/* Smaller Thumbs to click */}
              {!!selectedProduct?.images && selectedProduct.images.length > 0 && selectedProduct?.images.map((image, index) => (
                <>
               
                  <a href={`#${selectedProduct?.title}-img-${index}`}>
                    <img src={`/assets/image/products/${image}`} className="product-img" alt={`${selectedProduct?.title}}`} />
                  </a>
                </>
              ))}
                </div>
              </div>
            <div className="product-info">

            <p className="name">{capitalizeFirstLetter(selectedProduct?.title || '')}</p>
              <p className="size">Size: {selectedProduct?.size}</p>
              <p className="weight">Weight: {selectedProduct?.weight }</p>
              <p className="price">Rs {selectedProduct?.price}</p>
              <p className="detail">{ selectedProduct?.details}</p>
            <div className="counter">
              <p className="quantity">Quantity</p>
              <div className="counter-handle">

              <button onClick={handleDecrement} disabled={decreaseButtonDisability}><FaMinus /></button> 
              {counter} 
              <button onClick={()=>{handleIncrement(selectedProduct.qty)}} disabled={increaseButtonDisability}><FaPlus /></button>  </div>
              </div>
            <p className="rate">{'Total Price: Rs ' + calculateTotal(selectedProduct.price, counter)}</p>
            </div>
     </div>
                </div>
            </div>

                <Footer />

    </>

  )
}

export default DetailPage