import React, {createContext, useState, useEffect} from 'react'

export const Context=createContext(null);

export const ContextProvider = (props) => {

  const [products, setProducts] = useState();  
  const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [cartItemIndex, setCartItemIndex] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(0);


  const getProducts = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    setProducts(await response.json());
  }  ;
 
  const getProduct = async(id)=>{
    const response = await fetch('https://fakestoreapi.com/products/'+id);
    setProduct(await response.json());
  }  ;
 
    const addToCart = (product, quantity) => {
 let items=[...cartItem];
   let index =items.findIndex(p => p.id === product.id);

 if(index !== -1)
 {
  setQuantity(quantity);
 }
 else{
  setQuantity(quantity);
      items = [...items, product];
      setCartItemIndex(cartItemIndex+1);


 }

 setCartItem(items);



    }
     const handleCartProductQuantity = (type, product) => {
  if(type === "inc"){
       
        setQuantity(quantity+1)
  }
  else if(type === "dec"){
  if(quantity === 1)
  return 1;
  
  setQuantity(quantity-1)
    
  }
}
const handleRemoveFromCart = (product) => {

  alert('revove alert')

}

     const  contextValue ={products, getProducts, product,getProduct, addToCart, cartItem, setCartItem, showCart, setShowCart,quantity, setQuantity,handleCartProductQuantity, handleRemoveFromCart, cartItemIndex}
  return (
   <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

