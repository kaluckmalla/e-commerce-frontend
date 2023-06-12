import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {FaCartPlus} from 'react-icons/fa'
import { Context } from './ContextProvider';
import Cart from './Cart';

const SingleProduct = () => {
  const {id} =useParams();
const navigate= useNavigate();
const {product, getProduct, addToCart,showCart,setShowCart}=useContext(Context);
const [quantity, setQuantity] = useState(1);

useEffect(()=> {
  getProduct(id);
},[]);

const increment = () =>{
  setQuantity((prevState) => prevState + 1);
}
const decrement = () =>{
  setQuantity((prevState) => {
    if(prevState ===1)
    return 1;
    return prevState-1;
  });
}

  return (
    <>

    <div className="container mx-auto">
          <div className="row flex">
            <div className="preview col-md-6">
              
              <div className="preview-pic ">
                <div className="tab-pane "><img src={product.image} className="h-80 justify-items-center mx-auto mb-3 mt-3 hover:scale-110 transition duration-300"/></div>
                
              </div>
                          
            </div>
            <div className="details mx-3">
              <h3 className="product-title font-bold mt-4 text-lg">{product.title}</h3>
            
              <p className="product-description mb-3">{product.description}</p>
              
              <div className='quantity mb-3 flex items-center gap-4 text-sm '>
                <p className='font-bold italic'>Quantity</p>
                <button onClick={decrement} className='negative-button h-5 flex items-center justify-center px-2 cursor-pointer '>-</button>
                <span>{quantity}</span>
                <button onClick={increment} className='negative-button h-5 flex items-center justify-center px-2 cursor-pointer '>+</button>
  
              </div>
              <div className="action flex mb-3">
              <h4 className="price font-bold text-red-500  w-6/12 text-xl text-start">
                <span>${product.price}</span></h4>
              
                <button className="add-to-cart flex text-white bg-black text-sm
                 hover:bg-green-900 font-bold py-2 px-4 rounded-full  "
                  type="button" onClick={()=> {addToCart(product, quantity); setShowCart(true);
                    setQuantity(1);
                         // navigate(`/cart`);
                  }}><FaCartPlus size={20}/> add to cart </button>
                  
              </div>
              <div className='flex'>
              <p className='italic font-bold mr-2'>Category : </p>
             <p>{product.category}</p>
              </div>
            </div>
          </div>
    </div>
    {showCart && <Cart setShowCart={setShowCart}/> }
     </>
  )
}

export default SingleProduct
