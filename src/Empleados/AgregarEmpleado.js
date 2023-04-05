import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import uniqid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarEmpleado() {
	const navegar = useNavigate()

	//hooks
	const[nombre,setNombre]=useState('')
	const[apellido,setApellido]=useState('')
	const[puesto,setPuesto]=useState('')
	function agregarUsuario() {

		var usuario={
			nombre:nombre,
			apellido:apellido,
			puesto:puesto,
		}
		console.log(usuario);
		axios.post('http://localhost:8080/api/v1/RegistroEmpleado', usuario)
		.then(res=>{
			//alert(res.data)
			Swal.fire('Exito','El usuario se creo con exito')
			navegar(0)
		})
		.then(err =>{console.log(err)})

	}
	return(
		<div className="container">
			<div className="row">
				<h1 className="mt-4">Crear un nuevo Usuario</h1>
			</div>
			<div className="row">
				<div className="col-sm-6 offset-3">
					<div className="mb-3">
						<label htmlFor="nombre" className="form-label">Nombre</label>
						<input type="text" className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Apeliido</label>
						<input type="email" className="form-control"  value={apellido} onChange={(e)=>{setApellido(e.target.value)}} />
					</div>
					<div className="mb-3">
						<label htmlFor="telefono" className="form-label">Puesto</label>
						<input type="text" className="form-control"  value={puesto} onChange={(e)=>{setPuesto(e.target.value)}}/>
					</div>
					<button onClick={agregarUsuario} className="btn btn-success"> Guardar Usuario</button>
				</div>
			</div>
		</div>
	)
}
export default AgregarEmpleado