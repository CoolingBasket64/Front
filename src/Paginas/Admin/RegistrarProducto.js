import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import axios from 'axios';
import { mostrarImagenSeleccionada } from '../../js/imagenRP';


const RegistrarProductos = () => {

  const [producto, setProducto] = useState({
    nombreP: '',
    categoria: '',
    precio: '',
    region: '',
    archivoInput: ''
  });

  const{nombreP, categoria, precio, region, archivoInput} =producto;
const [error, setError] = useState('');
const [successMessage, setSuccessMessage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const registerProducto = async () => {
    try {

      const response = await axios.post('http://localhost:8888/api/v1/front/products/register', producto, {
headers: {
'Content-Type': 'application/json',
},
});  
    setSuccessMessage('producto creado con éxito');
    setError('');
    } catch (error) {
    console.error('Error en el registro:', error);

    if (error.response) {
      console.log('Respuesta del servidor:', error.response);
      if (error.response.status === 500 && error.response.data && error.response.data.message) {
        setError('Error: ' + error.response.data.message);
      } else {
        setError('Error: Hubo un error al momento de registrar el producto, vuelve a intentarlo' );
      }
    } else {
      setError('Error en el : ' + error.message);
    }
  }
};

  const onChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };


const onSubmit = (e) => {
    e.preventDefault();
    registerProducto()
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Limpiar localStorage al cerrar sesión
    localStorage.removeItem('name');
    // Redirigir a la página de inicio de sesión
    // Puedes usar useHistory() o Link para redirigir según tu configuración de enrutamiento
    window.location.href = '/';
  };



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
            <li><Link to={"/IndexA"} className="active" >Inicio</Link></li>
            <li><Link to={"/Productos"}>Mis productos</Link></li>
            <li><Link to={"/Productos"}>Pedidos</Link></li>
            <li><Link to={"/index"}>Cerrar sesión</Link></li>

          </ul>
        </nav>

        <div className="container">
          <form autoComplete='off' onSubmit={onSubmit} className="form-r">
            <center>
              <h2 className="form-title-l">Registrar Productos</h2>
            </center>
           
            {error && (
            <div className='form-texto-l-mal'>
            {error}
            </div>
            )}
            {successMessage && (
            <div className='form-texto-l-bien'>
                {successMessage}
            </div>
            )}
            <div className="form-container-l">
              <div className="form-group-l">
                <input type="text" id="nombreP" name='nombreP' onChange={onChange} value={producto.nombreP} required className="form-input-l" placeholder=" " />
                <label htmlFor="nombreP" className="form-label-l">Nombre Producto:</label>
                <span className="form-line" />
              </div>
              <div className="form-group-l">
                <label htmlFor="categoria" className="form-label-select">Categoria:</label>
                <select name="categoria" value={categoria} onChange={onChange} required id="lang">
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
                <input type="number" id="precio" name='precio' onChange={onChange} value={precio} required className="form-input-l" placeholder=" " />
                <label htmlFor="precio" className="form-label-l">Precio:</label>
                <span className="form-line-l" />
              </div>
              <div className="form-group-l">
                <label htmlFor="region" className="form-label-select">Region:</label>
                <select className="select2" name="region" onChange={onChange} value={region} required  id="lang">
                  <option value="caribe">Caribe</option>
                  <option value="pacifica">Pacífica</option>
                  <option value="andina">Andina</option>
                  <option value="orinoquia ">Orinoquia </option>
                  <option value="amazonia">Amazonia</option>
                  <option value="insular">Insular</option>
                </select>
                <span className="form-line" />
              </div>
        
             
              <div className="input-group mt-3">
              <label htmlFor="archivoInput" className="form-label-select">Imagen del producto:</label>
              <br></br>
                <input type="file" className='form-control' id="archivoInput" name='archivoInput'  onChange={onChange} value={archivoInput} required  />
              </div>    

              <center>
                <br />
                <input type="submit" className="form-submit-l" value="Registrar" />
              </center>


            </div>
          </form>
        </div>

        <div className="footer-r">
          <p> Creado por: Santiago Carreño | Aprendiz Sena </p><strong>©2023</strong>.
        </div>

      </div>

    </div>


  )
}

export default RegistrarProductos;