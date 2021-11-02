import { createContext } from "react";
import { useState } from "react/cjs/react.development";
import { useContext } from "react";
import { Cartctxt } from "./context";


export const CountCtxt = createContext()

const Countcontext = ({children}) => {
    const [count , setCount] = useState (1)
    



return ( 
    <CountCtxt.Provider value = {{count, setCount}}>
        {children}
    </CountCtxt.Provider>
)


}


export default Countcontext


