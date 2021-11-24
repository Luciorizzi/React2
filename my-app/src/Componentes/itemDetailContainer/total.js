import { useContext } from "react/cjs/react.development";
import { Cartctxt } from "../context/context";

const Total = () => {
  const { cart } = useContext(Cartctxt);




  const cambio =cart.map((producto) => producto.select.price * producto.cantidad );



console.log(cambio)

  const sumaPrecios = cambio.reduce((prev, next) => prev + next, 0);

  return <p className="carritoTotal">Total Carrito : ${sumaPrecios} </p>;
};

export default Total;
