
import "./Cartwidget.css"
import { useContext } from "react";
import { CountCtxt } from "../../context/countCtxt";




const Carrito = () => {
  
    const {count} = useContext(CountCtxt);
        return <>{count >= 1 && <div className="carrito"> <img src="https://i.imgur.com/2zH7Oz3.png?1" title="source: imgur.com" alt="carrito" /> <p className="carrito">{count} </p></div>}
       
        </>

        
    
}
export default Carrito;
