import axios from 'axios'
import React , {useEffect, useState}  from 'react'
import { useParams } from 'react-router-dom'
function EditarEmpleado() {

	const params = useParams()
	const[nombre,setNombre]=useState('')
	const[apellido,setApellido]=useState('')
	const[puesto,setPuesto]=useState('')

	useEffect(()=>{      
		axios.get('http://localhost:8080/api/v1/Empleado/'+params.idempleado).then(res=>{
			setNombre(res.data[0].nombre)
			setApellido(res.data[0].apellido)
			setPuesto(res.data[0].puesto)
            console.log(res.data[0].nombre)
		})
	},[])

	//funcion editausuario
	function editarusuario() {
		const actualizarusuario={
			nombre:nombre,
			apellido:apellido,
			puesto:puesto,
			idusuario:params.idusuario
		}

		//peticion con axios

		/*axios.post('/api/usuario/actualizausuario',actualizarusuario)
		.then(res=>{
			console.log(res.data)
		})
		.then(err=>{
			console.log(err)
		})*/
	}

	return(
		<div className="container">
			<div className="row">
				<h1 className="mt-4">Editar Usuario</h1>
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
					<button onClick={editarusuario} className="btn btn-success"> Editar Usuario</button>
				</div>
			</div>
		</div>
	)
}
export default EditarEmpleado