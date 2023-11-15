import React from "react";
import { Link } from 'react-router-dom';


const RegistrarProductos = () => {
  return (
<div>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
  <div className="body-r">
  <nav className="navA">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars" />
          </label>
          <Link to={"#"} className="enlace">
            <img src="logos.png" alt className="logo" />
          </Link>
          <ul className="ulA">
            <li className="liA"><Link to={"/IndexA"} className="active" >Inicio</Link></li>
            <li className="liA"><Link to={"#"}>Mis productos</Link></li>
            <li className="liA"><Link to={"#"}>Usuario</Link></li>
            <li className="liA"><Link to={"/login"}>Cerrar sesión</Link></li>
        
          </ul>
        </nav>
    
    <form className="form-l">
        <center>
      <h2 className="form-title-l">Registrar Productos</h2>
      </center>
      <p className="form-texto-l">Registrar un nuevo producto</p>
      <div className="form-container-l">
        <div className="form-group-l">
          <input type="text" id="nombrep" className="form-input-l" placeholder=" " />
          <label htmlFor="nombrep" className="form-label-l">Nombre Producto:</label>
          <span className="form-line" />
        </div>
        <div className="form-group-l">
        <label htmlFor="categoria" className="form-label-select">Categoria:</label>
        <select name="categoria" id="lang">
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>
          <span className="form-line" />
        </div>
     
        <div className="form-group-l">
          <input type="number" id="number" className="form-input-l" placeholder=" " />
          <label htmlFor="number" className="form-label-l">Precio:</label>
          <span className="form-line-l" />
        </div>
        <div className="form-group-l">
          <label htmlFor="regiones" className="form-label-select">Region:</label>
          <select className="select2" name="regiones" id="lang">
        <option value="caribe">Caribe</option>
        <option value="pacifica">Pacífica</option>
        <option value="andina">Andina</option>
        <option value="orinoquia ">Orinoquia </option>
        <option value="amazonia">Amazonia</option>
        <option value="insular">Insular</option>
      </select>
          <span className="form-line" />
        </div>
        
        <center>
        <br/>
          <input type="submit" className="form-submit-l" defaultValue="RegistrarP" value="Registrar" />
        </center>
        
      </div>
    </form>
    
    <div className="footer-r">
      <p> Creado por: Santiago Carreño | Aprendiz Sena </p><strong>©2023</strong>.
      </div>
      </div>
</div>


  )
}

export default RegistrarProductos;