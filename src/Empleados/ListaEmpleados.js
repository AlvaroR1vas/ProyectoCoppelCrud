import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import TablaEmpleados from './TablaEmpleados'
function ListaEmpleados() {

	const[datausuario,setdatausuario]=useState([])


	/*useEffect(()=>{
		axios.get('api/usuario/obtenerusuario').then(res=>{
			console.log(res)
		}).catch(err=>{
			console.log(err)
		})
	},[])*/
    useEffect(()=>{
		axios.get('http://localhost:8080/api/v1/Empleados').then(res=>{
			//console.log(res.data)
			setdatausuario(res.data)
		}).catch(err=>{
			console.log(err)
		})
	},[])


    const usuarios=datausuario.map((usuario)=>{
		return(
			<TablaEmpleados usuario={usuario}></TablaEmpleados>
		)
	})	
    return(        
        <div>
        <h2>Lista de Usuarios</h2>
            {usuarios}
        </div>
    )
}
export default ListaEmpleados