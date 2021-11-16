import { Link } from "react-router-dom";
import "./itemDetail.css";
import React from "react";
import RenderItemCount from "../itemListContainer/contador/renderItemCount";

function ItemDetail({ items }) {
  console.log(items);

  return (
 
      <div className="contenedor1">
        <p className="description">Detalles del producto:</p>
        <img className="img" alt="" src={items.pictureUrl} />
        <p className="description">{items.title} </p>
        <div className="description">${items.price}</div>
        <div className="description">{items.tela} </div>
        <RenderItemCount items={items} key={items.id} />
     

      <Link to="/Cart">
        <button className="buttonCompra">Terminar compra</button>
      </Link>
    </div>
  );
}

export default ItemDetail;
