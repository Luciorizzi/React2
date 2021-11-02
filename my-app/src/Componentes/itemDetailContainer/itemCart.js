import React, { useContext } from "react";
import { Cartctxt } from "../context/context";
import { CountCtxt } from "../context/countCtxt";



const ItemCart = ({detail}) => {

const {cart,setCart} = useContext(Cartctxt)
const {count}= useContext(CountCtxt)
const {id} = detail



  
 
  const removeItem = (id) =>{
   const item = cart.filter( detail => detail.id !== id)
    setCart(item)
    console.log(item)
  
  }

 




return ( <div className="classCart">
    <div className="contenedor1">
    <button  className=" X " onClick={() => removeItem(id )}>X</button>
      <p className="description">Detalles del producto:  </p>
    
      <img className="img" alt="" src={detail.pictureUrl} />
      <p className="description">{detail.title} </p>
      <div className="description">$ {detail.price * count}</div>
      <div className="description">{detail.tela} </div>
      <p>Cantidad {} </p>
      
    </div>
    
  </div>)
}
export default ItemCart