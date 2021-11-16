
import "./item.css";
import {  Link } from "react-router-dom";
function Item({ item }) {
  return (
    <div>
      <div className="contenedor">
        <Link to={`/item/${item.id}`}>
          <img className="img"  alt=""src={item.pictureUrl} />
          <p className="description">{item.title} </p>
          <div className="description">{ "$" + item.price}</div>
        </Link>
      
       
      </div>
    </div>
  );
}

export default Item;
