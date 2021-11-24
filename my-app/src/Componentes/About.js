import "./About.css";

function About() {
  return (
    <>
      <div className="imgContacto">
        <h2>Contacto </h2>
        <div className="contact">
          <p>
            Contamos con un equipo de especialistas en brindar una excelñente
            atencion al publico.
          </p>
          <form>
            <input className="input" placeholder="Email"></input>
            <input className="input" placeholder="Nombre y Apellido"></input>
            <input className="input" placeholder="Comentario"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default About;
