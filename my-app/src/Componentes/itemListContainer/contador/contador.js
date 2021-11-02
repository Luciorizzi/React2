import { CountCtxt } from "../../context/countCtxt";
import { useContext } from "react"
import "./contador.css"


 const Botones =( ) =>{
  const {count, setCount}= useContext(CountCtxt)
 
  function addCant(){
    if (count < 15){
      setCount(count +1)

    }
  }

function restCant (){
  if (count > 1){
    setCount(count  -1 )
  }
}

  

  


    return <div  className="containerAll">
    <div className="contador"  >
      <button className="button" onClick={ restCant} >-</button>
    <div id="numero">{count} </div>
      <button className="button" onClick={addCant}>+</button>
    </div>
    </div>
}



export default Botones