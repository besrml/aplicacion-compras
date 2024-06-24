/**
 * http://usejsdoc.org/
 */
import { Route, Routes} from 'react-router-dom'
import {NavBar} from './components/NavBar.jsx'
import {ComprasPage} from './pages/ComprasPage.jsx'
import {CarritoPage} from './pages/CarritoPage.jsx'

export const CarritoApp=()=>{
	return(
	<>
		<NavBar></NavBar>
		<div className="container">
		<Routes>
			<Route path='/' element={<ComprasPage></ComprasPage>}></Route>
			<Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
			<Route path='/*' element={<navigate to='/' />}></Route>
		</Routes>
		</div>
	</>)
}
