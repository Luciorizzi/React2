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
   
    .get()
    .then((snap) => {
      if (snap.size == 0) {
        console.log("No Hay resultados");
      }
   ;
      setItems(snap.docs.map((doc) => doc.data() ));
   
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
      <ItemDetail items={items} idDetalles= {idDetalles} />
    </div>
  );
};

export default ItemDetailContainer;
