import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import ItemDetail from "./itemDetail";
import "./itemDetail.css";
import { getFirestore } from "../../firebase/index";

const ItemDetailContainer = () => {
  const { id: idDetalles } = useParams();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState([]);
  console.log(loading);
  const getData = () => {
    setLoading(true);
    const db = getFirestore();

    const itemCollection = db.collection("Productos");
    itemCollection
      .where("id", "==", parseInt(idDetalles))
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          setDetail(doc.data());

          console.log(doc);
        });
      })

      .catch((error) => {
        console.log("Error al traer los items, error");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  console.log(detail);

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <ItemDetail detail={detail} idDetalles={idDetalles} />
    </div>
  );
};

export default ItemDetailContainer;
