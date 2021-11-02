
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import ItemDetail from "./itemDetail";
import "./itemDetail.css";

let productos = [
  {
    id: 1,
    title: "Buzo Rojo",
    price: "890",
    pictureUrl: "https://i.imgur.com/LoV9GY1.jpg?2",
    tela: "Algodon",
  },
  {
    id: 2,
    title: "Buzo Azul",
    price: "870",
    pictureUrl: "https://i.imgur.com/aqMpiFN.jpg?1",
    tela: "Algodon",
  },
  {
    id: 3,
    title: "Buzo Crema",
    price: "860",
    pictureUrl: "https://i.imgur.com/4vD58zI.jpg",
    tela: "Algodon",
  },
  {
    id: 4,
    title: "Buzo Celeste",
    price: "820",
    pictureUrl: "https://i.imgur.com/QxjfMUZ.jpg",
    tela: "Algodon",
  },
];

const ItemDetailContainer= () => {
  const [detail, getDetail] = useState(productos);
  const { id: idDetalles } = useParams();

  console.log(detail)

  const productsFilter = () => {
  
    const get_Detail =    detail.find((item)=> item.id === parseInt(idDetalles) )
   

    getDetail(get_Detail)
    console.log(get_Detail)
  } 

  useEffect(() => {
   
 productsFilter()
 
  
},[idDetalles],
  )


 
  return (
    <div>
      <ItemDetail detail={detail}  />
    </div>
  );


}

console.log(ItemDetailContainer)
export default ItemDetailContainer;
