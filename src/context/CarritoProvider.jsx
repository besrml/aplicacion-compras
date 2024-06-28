/**
 * http://usejsdoc.org/
 */
import  { CarritoContext } from "./CarritoContext.jsx"
import  { useReducer } from "react"

/* eslint-disable-next-line react/prop-types */
export const CarritoProvider=({children}) => {
	const initialState=[]
	
	const comprasReducer = (state =initialState,action ={})=>{
		switch (action.type) {
		case '[Carrito] Agregar Cantidad Compra':
			return [...state, action.payload];
		case '[Carrito] Aumentar Cantidad Compra':
			return state.map(
					item => {
						const cant=item.cantidad +1
						if(item.id===action.payload) return { ...item, cantidad:cant }
						return item
					}
				)
				
		case '[Carrito] Disminuir Cantidad Compra':
			return state.map(
			item => {
				const cant=item.cantidad - 1
				if(item.id===action.payload) {
					if(cant<=0) {
						return state.filter(compra=> compra.id !==action.payload);
					} else
						return { ...item, cantidad:cant }
				}
				return item
			})
						
		case '[Carrito] Eliminar Cantidad Compra':
			return  state.filter(compra=> compra.id !==action.payload);
		default :
			return state;
		}		
	}
	const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)
	
		const agregarCompra=(compra)=> {
		compra.cantidad=1	
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
	
	
	return (
	<CarritoContext.Provider value={{listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad}}>
		{children}
	</CarritoContext.Provider>
	)
}