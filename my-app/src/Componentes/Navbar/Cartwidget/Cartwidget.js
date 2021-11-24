import "./Cartwidget.css";
import { useContext } from "react";
import { Cartctxt } from "../../context/context";

const Carrito = () => {
  const { cart } = useContext(Cartctxt);

  return (
    <>
      {cart.length >= 1 && (
        <div className="carrito">
          {" "}
          <img
            src="https://i.imgur.com/2zH7Oz3.png?1"
            title="source: imgur.com"
            alt="carrito"
          />{" "}
          <p className="carrito">{cart.length} </p>
        </div>
      )}
    </>
  );
};
export default Carrito;
