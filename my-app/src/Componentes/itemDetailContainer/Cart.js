import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartctxt } from "../context/context";
import { CountCtxt } from "../context/countCtxt";
import ItemCart from "./itemCart";

function Cart() {
  const { cart, clearCart } = useContext(Cartctxt);

  const { count, setCount } = useContext(CountCtxt);

  const clearCount = () => {
    setCount(count - count + 1);
  };

  const clearAll = () => {
    clearCart();
    clearCount();
  };
 

  return (
    <div>
      <p>Carrito</p>

     {cart.length && 
        <button onClick={clearAll} className="buttonCompra">
          Vaciar carrito
        </button>
}

      {cart.length &&
         cart.map((producto) => <ItemCart key={producto} producto={producto}  />    ) }
      {!cart.length && (
        <>
          <p>No has agregado ningun producto! </p>
          <Link to="/itemListContainer">
            <p>Volver a la tienda</p>
          </Link>
        </>
      )}
    </div>
  );
}
export default Cart;
