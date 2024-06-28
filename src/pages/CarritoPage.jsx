/**
 * http://usejsdoc.org/
 */
import { CarritoContext } from "../context/CarritoContext.jsx"
import { useContext } from "react"
export const CarritoPage=()=>{
	const {listaCompras, agregarCompra, eliminarCompra, 
		aumentarCantidad, disminuirCantidad}= useContext(CarritoContext)
		const calcularTotal =()=> {
			const resultado=listaCompras.reduce((total,item)=>total+item.price * item.cantidad,0).toFixed(2)
			console.log(resultado)
			return resultado
		}
		const handleImpresion=()=>{
			print()
		}
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
						<td>
							<button className="btn btn-outline-primary"
								onClick={()=>aumentarCantidad(item.id)}>+</button>
							<button className="btn btn-primary">{item.cantidad}</button>
							<button className="btn btn-outline-primary"
								onClick={()=>disminuirCantidad(item.id)}>-</button>
						</td>
						<td><button type="button" className="btn btn-danger" 
							onClick={()=>eliminarCompra(item.id)}>Eliminar articulo</button> </td>
						<td>@mdo</td>
					</tr>
						
				)
			)
		}
		<tr key="1111111">
		<th><b>Total</b></th>
		<td></td>
		<td>${calcularTotal()}</td>
		<td></td>
		</tr>
		</tbody>
		</table>
		
		<div className="d-grid gap-2">
			<button type ="button" className="btn btn-primary" onClick={handleImpresion}>Comprar</button>
		</div>
		</>)
}