import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const IndexA = () => {

  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
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
        const response = await axios.get("http://localhost:8888/api/v1/front/products");
        setProductos(response.data.results);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);


  const handleEditarProducto = (producto) => {
    setProductoSeleccionado(producto);
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


  const [compra, setCompra] = useState({
    nombreP: '',
    nombre: '',
    apellido: '',
    correo: '',
    numero: '',
    direccion: ''
  });

  const{nombreP, nombre, apellido, correo, numero, direccion} =compra;
const [error, setError] = useState('');
const [successMessage, setSuccessMessage] = useState('');
 

  const registerCompra = async () => {
    try {

      const response = await axios.post('http://localhost:8888/api/v1/front/compras/register', compra, {
headers: {
'Content-Type': 'application/json',
},
});  
    setSuccessMessage('compra registrada con éxito');
    setError('');
    } catch (error) {
    console.error('Error en el registro:', error);

    if (error.response) {
      console.log('Respuesta del servidor:', error.response);
      if (error.response.status === 500 && error.response.data && error.response.data.message) {
        setError('Error: ' + error.response.data.message);
      } else {
        setError('Error: Hubo un error al momento de registrar la venta, vuelve a intentarlo' );
      }
    } else {
      setError('Error en el : ' + error.message);
    }
  }
};

  const onChange = (e) => {
    setCompra({
      ...compra,
      [e.target.name]: e.target.value
    });
  };

const onSubmit = (e) => {
    e.preventDefault();
    registerCompra()
  };
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
<h1>Catálogo de Compra</h1>


</header>
</center>

<div className="catalogo">
{productos.map((producto) => (
<div className="producto">
<img src={producto.archivoInput} alt="Producto 1" />
<h2>{producto.nombreP}</h2>
<p>Descripción del Producto 1. Precio: ${producto.precio}</p>
<button className="eliminar" onClick={() => EliminarProducto(producto._id)}>Eliminar</button>
</div>
 ))}


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