import React ,{useContext, useState} from 'react'
import {MdClose} from 'react-icons/md'
import {BsCartX} from 'react-icons/bs'
import { Context } from './ContextProvider'
import CartItems from './CartItems'
import { useNavigate } from 'react-router-dom'

const Cart = ({setShowCart}) => {
    const {cartItem,cartItemIndex, quantity}=useContext(Context);
   const navigate=useNavigate();
  return (
    
   <div className='cart-panel absolute top-16  bg-green-900 text-white right-0 max-h-screen w-6/12' >
     <div className='cart-content  '>
       <div className='cart-header font-bold  flex '>
       <span className='heading text-lg  ml-3 mb-3 w-10/12'>Shopping Cart</span>

         <span className='close-btn  ml-3 ' onClick={()=>{setShowCart(false)}}>
         <MdClose className='text-red-500 text-2xl bg-white  ml-7 mt-1  '/>
         </span>

       </div>
       <hr className='bg-white'/>
      { cartItem?.length<1 && <div className='empty-cart'>
   <BsCartX/>
   <span>No products in the cart.</span>
   <button className='return-cta'>Return to shop</button>
       </div>} 
     { cartItem?.length>0 &&    
     <> 
      <CartItems cartItem={cartItem} cartItemIndex={cartItemIndex} quantity={quantity} />
       <div className='cart-footer'>
         <div className='subtotal'>
           <span className='text-total'>Total price = ${cartItem.price * quantity}  </span>
         </div> 
         <div className='button'>
         <button className="checkout x text-white bg-black text-sm
                 hover:bg-green-900 font-bold py-2 px-4 rounded-full  "
                  type="button" onClick={()=> {
                         navigate(`/`);
                         
                  }}>continue shopping</button>           <button className="checkout x text-white bg-black text-sm
                 hover:bg-green-900 font-bold py-2 px-4 rounded-full  "
                  type="button" onClick={()=> {
                    alert("checkout")
                  }}>Checkout</button>
         </div>
       </div>
       </>
       }
   
   </div>
      </div>
  )
}

export default Cart
