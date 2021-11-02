import "./App.css";
import Navbar from "./Componentes/Navbar/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./Componentes/itemListContainer/itemListContainer";
import Home from "./Componentes/Home";
import About from "./Componentes/About";
import ItemDetailContainer from "./Componentes/itemDetailContainer/itemDetailContainer";
import Cart from "./Componentes/itemDetailContainer/Cart";
import CartContext from "./Componentes/context/context";
import Countcontext from "./Componentes/context/countCtxt";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Countcontext>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Home">
              <Home />
            </Route>

            <Route path="/ItemListContainer">
              <ItemListContainer />
            </Route>
            <Route path="/About">
              <About />
            </Route>

            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Countcontext>
      </BrowserRouter>
    </CartContext>
  );
}
export default App;
