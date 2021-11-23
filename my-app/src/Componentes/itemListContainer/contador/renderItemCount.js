import { useContext, useEffect, useState } from "react/cjs/react.development";
import Botones from "./contador";
import { Cartctxt } from "../../context/context";
import { CountCtxt } from "../../context/countCtxt";





function RenderItemCount({ detail }) {
  const [renderCount, setRenderCount] = useState(true);

  
  const { count, setCount } = useContext(CountCtxt);
  const { cart, setCart } = useContext(Cartctxt);
 

  const producto = { select: detail, cantidad:count, id: detail.id , subtotal: detail.price};


  

  const addToCart = (detail) => {
    console.log(`detail`, detail);
    console.log(`producto`, producto);
console.log(producto.subtotal)
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
     producto.subtotal = check.cantidad * producto.subtotal

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
              onClick={() => addToCart(producto)}
              className="agregar button"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
      {!renderCount && <p className="carritoP">Agregado Correctamente</p>}
    </div>
  );
}

export default RenderItemCount;
