import React, { useContext } from 'react'
import { Context } from './ContextProvider'
import {MdClose} from 'react-icons/md'
const CartItems = ({cartItem,cartItemIndex,quantity}) => {
    const {handleCartProductQuantity, handleRemoveFromCart} =useContext(Context);
   
    console.log(cartItem);
    return (
    <>
    <div className='cart-products my-1 mx-3 rounded'>

    {cartItem?.map((item) => (

      <div   className='flex' key={item.id}>

      
       <div className='product-details w-full h-full bg-black rounded mb-1 mt-1'>
              <MdClose className='close-btn bg-red-500  rounded-lg text' onClick={() => {
        handleRemoveFromCart(item);
       }}/>
     

       <div className='quantity    gap-4 text-sm '>
          <div className='img-container flex '>
          <img src={item.image} alt='feature-img' className='h-16 ml-3 '/>
          <p className='font-bold mx-3'>{item.title}</p>
          </div>
         
          <div className='calculation-and-quantity  flex '>

          <div className='m-3 w-6/12 '>
           <span>( {quantity}</span>
           <span>x</span>
           <span>$ {item.price}</span>
           <span> = ${quantity * item.price} )</span>
       </div>
         <div className='m-3 -black  w-6/12  justify-self-end'>          
         <button className='negative-button h-5 bg-gray-500   justify-center px-2 cursor-pointer ' onClick={() => {
          handleCartProductQuantity(`dec`, item);
         }}>-</button>
         <span> {quantity} </span>
         <button className='positive-button h-5   bg-gray-500   justify-center px-2 cursor-pointer ' onClick={() => {
           handleCartProductQuantity(`inc`, item);
         }}>+</button>  
         </div>
      </div>
              
          </div>
       </div>
   </div>
      ))
      
    }
      
     
  </div>
  </>
  )
}

export default CartItems
