import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import ItemDetail from "./itemDetail";
import "./itemDetail.css";
import { getFirestore } from "../../firebase/index";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id: idDetalles } = useParams();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getData = () => {
    setLoading(true);
    const db = getFirestore();

    const itemCollection = db.collection("Productos");
    itemCollection
    .where("id", "==", idDetalles)
    .get()
    .then((snap) => {
      if (snap.size == 0) {
        console.log("No Hay resultados");
      }
   ;
      snap.forEach((doc) => doc.data());
      setItems(snap)
    })
    .catch((error) => {
      console.log("Error al traer los items, error");
    })
    .finally(() => {
      setLoading(false);
    });



  }
console.log(items)


  useEffect(() => {
  getData()


  }, [idDetalles]);

  return (
    <div>
      <ItemDetail items={items} />
    </div>
  );
};

export default ItemDetailContainer;
