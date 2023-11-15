import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/auth/login';
import CrearCuenta from './Paginas/auth/CrearCuenta';
import Index from './Paginas/auth/Index';
import ElegirR from './Paginas/auth/ElegirRegistrar';
import IndexA from './Paginas/Admin/Index';
import Productos from './Paginas/Admin/Productos';
import RegistrarProductos from './Paginas/Admin/RegistrarProducto';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/crear-cuenta' exact element={<CrearCuenta/>}/>
          <Route path='/index' exact element={<Index/>}/>
          <Route path='/ElegirR' exact element={<ElegirR/>}/>
          <Route path='/IndexA' exact element={<IndexA/>}/>
          <Route path='/Productos' exact element={<Productos/>}/>
          <Route path='/RProductos' exact element={<RegistrarProductos/>}/>
         
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
