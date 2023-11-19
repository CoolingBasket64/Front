import React from "react";
import { Link } from 'react-router-dom';


const Catalogo = () => {
  return (

<div>
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
<div className="body-index-c">

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
            <li><Link to={"/Catalogo"}>Catalogo</Link></li>
            <li><Link to={"/login"}>Iniciar sesión</Link></li>

          </ul>
        </nav>
        <div className="container-c">
          <center>
<header>
<h1>Catálogo de Compra</h1>




<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className="">
          <h2 className="form-title-l">Registrar Compra</h2>
          <p className="form-texto-l">Registrar datos de contacto para la compra</p>
          <div className="form-container-l">
            <div className="form-group-l">
              <input type="text" id="nombre" className="form-input-l" placeholder=" " />
              <label htmlFor="nombre" className="form-label-l">Nombres:</label>
              <span className="form-line" />
            </div>
            <div className="form-group-l">
              <input type="text" id="apellido" className="form-input-l" placeholder=" " />
              <label htmlFor="apellido" className="form-label-l">Apellidos:</label>
              <span className="form-line" />
            </div>
            <div className="form-group-l">
              <input type="email" id="correo" className="form-input-l" placeholder=" " />
              <label htmlFor="correo" className="form-label-l">Correo:</label>
              <span className="form-line" />
            </div>
            <div className="form-group-l">
              <input type="number" id="numero" className="form-input-l" placeholder=" " />
              <label htmlFor="numero" className="form-label-l">Numero de contacto:</label>
              <span className="form-line" />
            </div>
            
            <div className="form-group-l">
              <input type="text" id="direccion" className="form-input-l" placeholder=" " />
              <label htmlFor="direccion" className="form-label-l">Direccion:</label>
              <span className="form-line" />
            </div>
            <center>
              <input type="submit" className="form-submit-le" defaultValue="Registrarse" />

            </center>

          </div>
        </form>
      </div>
      
    </div>
  </div>
</div>

</header>
</center>
<div className="catalogo">
<div className="producto">
 <img src="carrusel.png" alt="Producto 1" />
 <h2>Producto 1</h2>
 <p>Descripción del Producto 1. Precio: $XX</p>
 <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar al Carrito</button>
</div>

<div className="producto">
 <img src="carrusel.png" alt="Producto 1" />
 <h2>Producto 1</h2>
 <p>Descripción del Producto 1. Precio: $XX</p>
 <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar al Carrito</button>
</div>

<div className="producto">
 <img src="carrusel.png" alt="Producto 1" />
 <h2>Producto 1</h2>
 <p>Descripción del Producto 1. Precio: $XX</p>
 <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar al Carrito</button>
</div>

<div className="producto">
 <img src="carrusel.png" alt="Producto 1" />
 <h2>Producto 1</h2>
 <p>Descripción del Producto 1. Precio: $XX</p>
 <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar al Carrito</button>
</div>

<div className="producto">
 <img src="carrusel.png" alt="Producto 1" />
 <h2>Producto 1</h2>
 <p>Descripción del Producto 1. Precio: $XX</p>
 <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar al Carrito</button>
</div>

<div className="producto">
 <img src="carrusel.png" alt="Producto 1" />
 <h2>Producto 1</h2>
 <p>Descripción del Producto 1. Precio: $XX</p>
 <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar al Carrito</button>
</div>



</div>

</div>

<div className="footer">
          <p> Creado por: Santiago Carreño | Aprendiz Sena </p><strong>©2023</strong>.
        </div>
</div>

</div>


)
}

export default Catalogo;