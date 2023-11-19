import React from "react";
import { Link } from 'react-router-dom';


const IndexA = () => {
  return (
<div>
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
<div className="body-index-c">

<nav className="navA">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars" />
          </label>
          <Link to={"#"} className="enlace">
            <img src="logos.png" alt className="logo" />
          </Link>
          <ul className="ulA">
            <li className="liA"><Link to={"/IndexA"} className="activeA" >Inicio</Link></li>
            <li className="liA"><Link to={"/Productos"}>Mis productos</Link></li>
            <li className="liA"><Link to={"/Productos"}>Pedidos</Link></li>
            <li className="liA"><Link to={"/index"}>Cerrar sesión</Link></li>

          </ul>
        </nav>
        <div className="container-c">
          <center>
<header>
<h1>Catálogo de Compra</h1>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
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

export default IndexA;