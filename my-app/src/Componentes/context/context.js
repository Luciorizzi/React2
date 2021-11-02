import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const Cartctxt = createContext();



const CartContext = ({children} ) => { 
    const [cart , setCart] =  useState([])

    const clearCart = () => {
      setCart([])}



  return (
  <Cartctxt.Provider value= { {cart, setCart , clearCart }}>
  {children}
  </ Cartctxt.Provider>
  )
};

export default CartContext;
