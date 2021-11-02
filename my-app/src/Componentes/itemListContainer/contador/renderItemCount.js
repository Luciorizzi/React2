import { useContext, useState } from "react/cjs/react.development";
import Botones from "./contador";
import { Cartctxt } from "../../context/context";
import { CountCtxt } from "../../context/countCtxt";
import ItemCart from "../../itemDetailContainer/itemCart";

function RenderItemCount({ detail }) {
  const [renderCount, setRenderCount] = useState(true);

  const { count, setCount } = useContext(CountCtxt);
  const { cart, setCart } = useContext(Cartctxt);


  const producto = {select : detail, cantidad:count}

 



  
      const addToCart =() => {
        setRenderCount(false);
        setCart([...cart, producto.detail]);
   
    }
    
  

  return (
    <div>
      {renderCount && (
        <div>
          <div>
            <div className="agregar">
              <Botones setCount={setCount} count={count} className="button" />
            </div>
          </div>
          <div className="containerAgregar">
            <button onClick={() =>  addToCart(producto)} className="agregar button">
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
      {!renderCount && <p>Agregado Correctamente</p>}
    </div>
  );
}

export default RenderItemCount;
