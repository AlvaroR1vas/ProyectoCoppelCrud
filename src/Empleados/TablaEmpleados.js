

import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'



function TablaEmpleados({usuario}) {
	const navegar = useNavigate()

	useEffect(()=>{
		AOS.init()
	})
	
	return(		
        <div className="container">
			<div className="row">
				<div className="col-sm-6 offset-3" data-aos="flip-right">
					<ul className="list-group">
						<li className="list-group-item">{usuario.idempleado}</li>
						<li className="list-group-item">{usuario.nombre}</li>
						<li className="list-group-item">{usuario.apellido}</li>
						<li className="list-group-item">{usuario.puesto}</li>
					</ul>
					<Link to={`/editar-empleado/${usuario.idempleado}`}><li className="btn btn-primary">Editar</li></Link>

					&nbsp;
					<hr className="mt-4"></hr>
				</div>
			</div>
		</div>
	)
}
export default TablaEmpleados
