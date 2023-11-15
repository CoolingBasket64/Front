import React from "react";
import { Link } from 'react-router-dom';


const IndexA = () => {
  return (
    <div>
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
      <div className="body-index">
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
            <li className="liA"><Link to={"/Productos"}>Mis productos</Link></li>
            <li className="liA"><Link to={"#"}>Usuario</Link></li>
            <li className="liA"><Link to={"/login"}>Cerrar sesión</Link></li>
        
          </ul>
        </nav>
<div id="slider">
  <input type="radio" name="slider" id="slide1" defaultChecked />
  <input type="radio" name="slider" id="slide2" />
  <input type="radio" name="slider" id="slide3" />
  <input type="radio" name="slider" id="slide4" />
  <div id="slides">
    <div id="overflow">
      <div className="inner">
        <div className="slide slide_1">
          <div className="slide-content">
          <img src="naruto.png" alt className="imagen" />
          </div>
        </div>
        <div className="slide slide_2">
          <div className="slide-content">
          <img src="carrusel.png" alt className="imagen" />
          </div>
        </div>
        <div className="slide slide_3">
          <div className="slide-content">
            <h2>Slide 3</h2>
            <p>Content for Slide 3</p>
          </div>
        </div>
        <div className="slide slide_4">
          <div className="slide-content">
            <h2>Slide 4</h2>
            <p>Content for Slide 4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="controls">
    <label htmlFor="slide1" />
    <label htmlFor="slide2" />
    <label htmlFor="slide3" />
    <label htmlFor="slide4" />
  </div>
  <div id="bullets">
    <label htmlFor="slide1" />
    <label htmlFor="slide2" />
    <label htmlFor="slide3" />
    <label htmlFor="slide4" />
  </div>
</div>

        
      <div className="footer">
      <p> Creado por: Santiago Carreño | Aprendiz Sena </p><strong>©2023</strong>.
      </div>
      </div>
    </div>


  )
}

export default IndexA;