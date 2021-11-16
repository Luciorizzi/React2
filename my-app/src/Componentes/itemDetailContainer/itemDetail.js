import { Link } from "react-router-dom";
import "./itemDetail.css";
import React from "react";
import RenderItemCount from "../itemListContainer/contador/renderItemCount";
import { useEffect, useState } from "react/cjs/react.development";

function ItemDetail({ items, idDetalles }) {
const [detail, getDetail] = useState([])
  console.log(items);
console.log(idDetalles)

const productsFilter= () => {
  const items1 = items.find((item) => item.id === parseInt (idDetalles))
getDetail(items1)
console.log(detail)
}

useEffect (() => {
  productsFilter()
})
  return (

  <div>
   <div className="contenedor1">
        <p className="description">Detalles del producto:</p>
        <img className="img" alt="" src={detail.pictureUrl} />
        <p className="description">{detail.title} </p>
        <div className="description">${detail.price}</div>
        <div className="description">{detail.tela} </div>  
      

    
        <RenderItemCount detail={detail} key={detail.id} />
     

      <Link to="/Cart">
        <button className="buttonCompra">Terminar compra</button>
      </Link>
    </div>
  </div>
  );
}

export default ItemDetail;
