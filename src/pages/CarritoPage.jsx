/**
 * http://usejsdoc.org/
 */
export const CarritoPage=()=>{
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
		<tr>
			<th scope="row">1</th>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
			<td>@mdo</td>
		</tr>
		</tbody>
		</table>
		
		<div className="d-grid gap-2">
			<button type ="button" className="btn btn-primary">Comprar</button>
		</div>
		</>)
}