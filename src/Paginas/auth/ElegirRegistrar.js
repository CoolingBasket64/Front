import React from "react";
import { Link } from 'react-router-dom';


const ElegirR = () => {
  return (
    <div>
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
      <div className="body">
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars" />
          </label>
          <Link to={"#"} className="enlace">
            <img src="logos.png" alt className="logo" />
          </Link>
          <ul>
            <li><Link to={"/index"} className="active" >Inicio</Link></li>
            <li><Link to={"#"}>Catalogo</Link></li>
            <li><Link to={"/login"}>Iniciar sesión</Link></li>
          </ul>
        </nav>
        <form className="form-er">
            <center>
          <h2 className="form-title-er">Elija bajo que rol desea registrarse</h2>
          </center>
          <div className="form-container-l">
            
            <center>
              <Link to={"/crear-cuenta"}><button className="button-l">Cliente</button></Link>
              <Link to={"/crear-cuenta"}><button className="button-l">Vendedor</button></Link>
            </center>
            
   
          </div>
        </form>
        
      <div className="footer">
      <p> Creado por: Santiago Carreño | Aprendiz Sena </p><strong>©2023</strong>.
      </div>
      </div>
    </div>


  )
}

export default ElegirR;