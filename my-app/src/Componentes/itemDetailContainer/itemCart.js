import React, { useContext } from "react";
import { Cartctxt } from "../context/context";
import { CountCtxt } from "../context/countCtxt";



const ItemCart = ({producto}) => {

const {cart,setCart} = useContext(Cartctxt)
const {count}= useContext(CountCtxt)
const {id} = producto



  
 
  const removeItem = (id) =>{
   const item = cart.filter( detail => detail.id !== id)
    setCart(item)
    console.log(item)
  
  }

 




return ( <div className="classCart">
    <div className="contenedor1">
    <button  className=" X " onClick={() => removeItem(id )}>X</button>
      <p className="description">Detalles del producto:  </p>
    
      <img className="img" alt="" src={producto.pictureUrl} />
      <p className="description">{producto.title} </p>
      <div className="description">$ {producto.price * count}</div>
      <div className="description">{producto.tela} </div>
      <p>Cantidad : {producto.cantidad} </p>
      
    </div>
    
  </div>)
}
export default ItemCart