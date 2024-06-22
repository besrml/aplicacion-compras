/**
 * http://usejsdoc.org/
 */
import { Route, Routes} from 'react-router-dom'
import {NavBar} from './components/NavBar.jsx'
import {Compras} from './components/Compras.jsx'

export const CarritoApp=()=>{
	return(<>
	<h2>Carrito de compras</h2>
	<NavBar></NavBar>
	<Routes>
	<Route path='/' element={<Compras></Compras>}>
	</Route>
	</Routes>
	</>)
}