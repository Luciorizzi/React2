
import { useContext, useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { Cartctxt } from "../context/context";

const Total = () => {
  const { cart, clearCart } = useContext(Cartctxt);

  const [total, setTotal] = useState([]);

  const cambio = cart.map((producto) => producto.subtotal);

  const sumaPrecios = cambio.reduce((prev, next) => prev + next, 0);

  useEffect(() => {
    setTotal(total + cambio);
  }, []);

  return <p className="carritoP">TOTAL {sumaPrecios} </p>;
};

export default Total;
