import { useContext, useState } from "react/cjs/react.development";
import Botones from "./contador";
import { Cartctxt } from "../../context/context";
import { CountCtxt } from "../../context/countCtxt";


function RenderItemCount({ detail }) {
  const [renderCount, setRenderCount] = useState(true);

  
  const { count, setCount } = useContext(CountCtxt);
  const { cart, setCart } = useContext(Cartctxt);


  

  const addToCart = (detail) => {
    console.log(`detail`, detail);
    const producto = { select: detail, cantidad:count, id: detail.id };
    console.log(`producto`, producto);

    setCount(1)

     const check = cart.length  &&  cart.find((producto) => producto.id === detail.id);
 
 ;
    console.log( `check`, check);


    if (check === 0  || check === undefined) {
      setRenderCount(false);
      setCart([...cart, producto]);
    } else{
      setRenderCount(false);
     producto.cantidad   = check.cantidad + count

      setCart ([...cart, producto])
  
   

    }
    console.log(`cart`,cart);
    
  };
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
            <button
              onClick={() => addToCart(detail)}
              className="agregar button"
            >
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
