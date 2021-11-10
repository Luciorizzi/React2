import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Item from "./item";
import "./item.css"


let productos = [
  {
    id: 1,
    title: "Buzo Rojo",
    price: "$890",
    pictureUrl: "https://i.imgur.com/LoV9GY1.jpg?2",
    tela:"Algodon"
  },
  {
    id: 2,
    title: "Buzo Azul",
    price: "$870",
    pictureUrl: "https://i.imgur.com/aqMpiFN.jpg?1",
    tela: "Algodon"
  },
  {
    id: 3,
    title: "Buzo Crema",
    price: "$860",
    pictureUrl: "https://i.imgur.com/4vD58zI.jpg" ,
    tela:"Algodon"
  },
  {
    id: 4,
    title: "Buzo Celeste",
    price: "$820",
    pictureUrl: "https://i.imgur.com/QxjfMUZ.jpg",
    tela:"Algodon"
  },
];

const datacontent = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};

function ItemList() {
  const [item_list, setitem_list] = useState([])

  const set_item_list = async () => {
    const get_items = await datacontent();

    setitem_list(get_items);
  }

  useEffect (() => {
    set_item_list();
  }, []);

  return (
    <div id="buzo">
      {item_list.map((item) => (
        <div  key={item.id} >
        <Item item={item} />
        </div>
      ))}
   </div>
  );
}

export default ItemList;
