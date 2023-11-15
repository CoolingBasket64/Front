import React from "react";
import { Link } from 'react-router-dom';


const Login = () => {
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
        <form className="form-l">
          <h2 className="form-title-l">Iniciar Sesión</h2>
          <p className="form-texto-l">Ingrese en caso de ya estar registrado</p>
          <div className="form-container-l">
            <div className="form-group-l">
              <input type="text" id="usuario" className="form-input-l" placeholder=" " />
              <label htmlFor="usuario" className="form-label-l">Usuario:</label>
              <span className="form-line" />
            </div>
            <div className="form-group-l">
              <input type="password" id="password" className="form-input-l" placeholder=" " />
              <label htmlFor="password" className="form-label-l">Contraseña:</label>
              <span className="form-line-l" />
            </div>
            <center>
              <input type="submit" className="form-submit-l" defaultValue="Entrar" />
              <Link to={"/ElegirR"}><button className="button-l">Crear Cuenta</button></Link>
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

export default Login;