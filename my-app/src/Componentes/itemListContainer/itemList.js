import {  useState } from "react/cjs/react.development";
import { useEffect } from "react";
import Item from "./item";
import "./item.css"
import { getFirestore } from "../../firebase/index";




function ItemList() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  console.log(loading)
  const getData = () => {
  setLoading(true);
  const db = getFirestore();

  const itemCollection = db.collection("Productos");

  itemCollection
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No Hay resultados");
      }
      console.log(querySnapshot.docs);
      setItems(querySnapshot.docs.map((doc) => doc.data()));
    })
    .catch((error) => {
      console.log("Error al traer los items, error");
    })
    .finally(() => {
      setLoading(false);
    });
}
useEffect(() => {
  getData();
}, []);


console.log(items)
  return (
    <div id="buzo">
      {items.map((item) => (
        <div  key={item.id} >
        <Item item={item} />
        </div>
      ))}
   </div>
  );
}

export default ItemList;
