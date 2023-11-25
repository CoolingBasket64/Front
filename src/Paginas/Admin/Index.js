import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const IndexA = () => {

  const getnombre = localStorage.getItem('nombreE');

  const [productos, setProductos] = useState([]);
  const [nuevaInformacion, setNuevaInformacion] = useState({
    nombreP: "",
    categoria: "",
    precio: "",
    region: "",
    archivoInput: ""
  });
  const [mensajeExito, setMensajeExito] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/api/v1/front/products/empresa/${getnombre}`);
        setProductos(response.data.products);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);



  const handleEditarProducto = (producto) => {
    setNuevaInformacion({
      nombreP: producto.nombreP,
      categoria: producto.categoria,
      precio: producto.precio,
      region: producto.region,
      archivoInput: producto.archivoInput
    });
  };


  const EliminarProducto = async (productoId) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta cita?");
    if (confirmacion) {
      try {
        await axios.delete(`http://localhost:8888/api/v1/front/products/${productoId}`);
        const updatedProductos = productos.filter((producto) => producto._id !== productoId);
        setProductos(updatedProductos);
        setMensajeExito("Producto eliminado con éxito.");
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    }
  };


  const handleChangeNuevaInformacion = (e) => {
    setNuevaInformacion({
      ...nuevaInformacion,
      [e.target.name]: e.target.value
    });
  };


  const handleCerrarMensajeExito = () => {
    setMensajeExito("");
  };
const [error, setError] = useState('');
const [successMessage, setSuccessMessage] = useState('');
 

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
            <li className="liA"><Link to={"/ConsP"}>Pedidos</Link></li>
            <li className="liA"><Link to={"/index"} >Cerrar sesión</Link></li>

          </ul>
        </nav>
        <div className="container-c">
          <center>
          <header>
<h1>Mis productos</h1>



{mensajeExito && (
        <div className="form-texto-l-bien">
          <p>{mensajeExito}</p> <button onClick={handleCerrarMensajeExito}>&times;</button>
        </div>
      )}
</header>
</center>

<div className="catalogo">
  {
    productos.map((producto) => (
      <div className="producto" key={producto._id}>
        <img src={producto.archivoInput} alt="Producto 1" />
        <h2>{producto.nombreP}</h2>
        <p>Precio: ${producto.precio}</p>
        <button className="eliminar" onClick={() => EliminarProducto(producto._id)}>Eliminar</button>
      </div>
    )) }
  
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