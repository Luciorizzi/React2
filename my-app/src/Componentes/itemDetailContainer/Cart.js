import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartctxt } from "../context/context";
import { CountCtxt } from "../context/countCtxt";
import ItemCart from "./itemCart";
import "./Cart.css";
import Total from "./total";

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
      <p className="carritoP">Carrito</p>

      {cart.length && (
        <button onClick={clearAll} className="buttonCompra">
          Vaciar carrito
        </button>
      )}

      <Total />
      <p className="Agregados">Productos agregados: {cart.length}</p>

      <div className="Carrito">
        {cart.length &&
          cart.map((producto) => (
            <ItemCart
              key={producto.id}
              producto={producto.select}
              cantidad={producto.cantidad}
            />
          ))}

        <div>
          {!cart.length && (
            <div className="Vacio">
              <p className="carritoP">No has agregado ningun producto! </p>
              <Link to="/itemListContainer">
                <p className="carritoP">Volver a la tienda</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Cart;
