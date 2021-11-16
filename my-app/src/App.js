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
import Footer from "./Componentes/Navbar/Footer/footer";
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
        <Footer/>
       </Countcontext>
      </BrowserRouter>
    </CartContext>
 
  );
}
export default App;


 /* const crearDataLote = () => {
    const db = getFirestore();

    const documentCollection = db.collection("contacts").doc();

    const buzoRojo = {
      id: 1,
      title: "Rojo",
      photo: "https://i.imgur.com/LoV9GY1.jpg?2",
      price: 890,
      tela: "Algodon",
    };
    const buzoAzul = {
      id: 2,
      title: "Azul",
      photo: "https://i.imgur.com/aqMpiFN.jpg?1",
      price: 870,
      tela: "Algodon",
    };
    const buzoCrema = {
      id: 3,
      title: "Crema",
      photo: "https://i.imgur.com/4vD58zI.jpg",
      price: 860,
      tela: "Algodon",
    };
    const batch = db.batch();
    batch.set(documentCollection, buzoRojo);
    batch.set(documentCollection, buzoAzul);
    batch.set(documentCollection, buzoCrema);

    batch
      .commit()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  crearDataLote();*/


