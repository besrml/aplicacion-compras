/**
 * http://usejsdoc.org/
 */
import  { CarritoContext } from "./CarritoContext.jsx"
import  { useReducer } from "react"
const initialState=[]
export const CarritoProvider=({children}) => {
	
const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)
	const agregarCompra=(compra)=> {
		 const action = {
			type: '[Carrito] Agregar Cantidad Compra',
			payload: compra
		 }
		 dispatch(action)
	}

	const aumentarCantidad=(id)=> {
		const action = {
			type: '[Carrito] Aumentar Cantidad Compra',
			payload: id
		}
		dispatch(action)
	}
	const disminuirCantidad=(id)=> {
		const action = {
			type: '[Carrito] Disminuir Cantidad Compra',
			payload: id
		}
		dispatch(action)
	}
	
	const eliminarCompra=(id)=> {
		const action = {
			type: '[Carrito] Eliminar Cantidad Compra',
			payload: id
		}
		dispatch(action)
	}
	
	const comprasReducer = (state =initialState,action ={}) {
		switch (action.type) {
		case '[Carrito] Agregar Cantidad Compra':
			return [...state, action.payload]
			break;
			
		case '[Carrito] Aumentar Cantidad Compra':
			break;
			
		case '[Carrito] Disminuir Cantidad Compra':
			break;
			
		case '[Carrito] Eliminar Cantidad Compra':
			return  state.filter(compra=> compra.id !==action.payload)
			break;
		default :
			return state
			
	}
	
	return (
	<CarritoContext.Provider>
	{children}
	</CarritoContext.Provider>
	)
}