import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { Cartctxt } from "../context/context";


const ItemCart = ({ producto, cantidad}) => {
  const { cart, setCart } = useContext(Cartctxt);
 const {id} = producto
const [cant , setCant ] = useState(cantidad)

 console.log(producto)
  const removeItem = () => {
    const item = cart.filter((producto) => producto.id !== id);
    setCart(item);
    console.log(item);
  };




  return (
    <div className="classCart">
      <div className="contenedor1">
        <button className=" X " onClick={() => removeItem(id)}>
          X
        </button>
        <p className="description">Detalles del producto: </p>

        <img className="img" alt="" src={producto.pictureUrl} />
        <p className="description">{producto.title} </p>
        <div className="description">$ {producto.price * cantidad}</div>
        <div className="description">{producto.tela} </div>
        <p>Cantidad : {cant} </p>
      </div>
    </div>
  );
};
export default ItemCart;
