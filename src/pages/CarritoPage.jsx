/**
 * http://usejsdoc.org/
 */
import { CarritoContext } from "../context/CarritoContext.jsx"
import { useContext } from "react"
export const CarritoPage=()=>{
	const {listaCompras, agregarCompra, eliminarCompra, 
		aumentarCantidad, disminuirCantidad}= useContext(CarritoContext)
		
	return(
		<>
		<table className="table">
			<thead>
			<tr>
				<th scope="col">Nombre</th>
				<th scope="col">Precio</th>
				<th scope="col">Cantidad</th>
				<th scope="col">Eliminar</th>
			</tr>
			</thead>
		<tbody>
		{
			listaCompras.map(
				item=>(
						<tr key={item.id}>
						<th scope="row">{item.title}</th>
						<td>{item.price}</td>
						<td>1</td>
						<td><button type="button" className="btn btn-danger" 
							onClick={()=>eliminarCompra(item.id)}>Eliminar articulo</button> </td>
						<td>@mdo</td>
					</tr>
						
				)
			)
		}
		
		</tbody>
		</table>
		
		<div className="d-grid gap-2">
			<button type ="button" className="btn btn-primary">Comprar</button>
		</div>
		</>)
}