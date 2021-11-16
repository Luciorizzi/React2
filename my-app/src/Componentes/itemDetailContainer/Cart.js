import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartctxt } from "../context/context";
import { CountCtxt } from "../context/countCtxt";
import ItemCart from "./itemCart";
import "./Cart.css";

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
      {cart.length && (
        <button onClick={clearAll} className="buttonCompra">
          Vaciar carrito
        </button>
      )}
  
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
            <p>No has agregado ningun producto! </p>
            <Link to="/itemListContainer">
              <p>Volver a la tienda</p>
            </Link>
          </div>
        )}
      </div>
      </div>
      <p className="Agregados">Productos agregados: {cart.length}</p>
      </div>
    

  );
}
export default Cart;
