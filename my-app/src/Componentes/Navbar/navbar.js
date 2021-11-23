import { Link } from "react-router-dom";
import Carrito from "./Cartwidget/Cartwidget";

import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/ItemListContainer">
            <img
              alt=""
              src="https://i.imgur.com/JWZWQsU.png?1"
              title="source: imgur.com"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Home">
                  <p
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ItemListContainer">
                  <p className="nav-link active outDecoration">Divers</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About">
                  <p className="nav-link active">About</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Carrito number="4" />
      </nav>
    </header>
  );
}
export default Navbar;
