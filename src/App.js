import './App.css';
import ListaEmpleados from './Empleados/ListaEmpleados';
import AgregarEmpleado from './Empleados/AgregarEmpleado';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditarEmpleado from './Empleados/EditarEmpleado';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="./">CRUD</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregar-empleado">Agregar Usuario</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>



   <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaEmpleados/>} exact></Route>
        <Route path='/agregar-empleado' element={<AgregarEmpleado/>} exact></Route>
        <Route path='/editar-empleado/:idempleado' element={<EditarEmpleado/>} exact></Route>


      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;