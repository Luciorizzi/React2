import { Link } from "react-router-dom";
import "./itemDetail.css";
import React from "react";
import RenderItemCount from "../itemListContainer/contador/renderItemCount";

function ItemDetail({ detail, idDetalles }) {
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
