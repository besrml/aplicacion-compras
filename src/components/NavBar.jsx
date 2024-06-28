/**
 * http://usejsdoc.org/
 */
import { NavLink } from 'react-router-dom'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { CarritoContext } from '../context/CarritoContext.jsx'
import { useContext } from 'react'
export const NavBar = () => {
	const {listaCompras} = useContext(CarritoContext)
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid bg-secondary">
				<NavLink to='/' className="navbar-brand"  href="#">Carrito de compras</NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" 
					data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
						aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
						<NavLink to='/' className="nav-link active">Compras</NavLink>
						</li>
					</ul>
					<NavLink id="id-compras" className='nav-link'  to='/carrito'>
					<Badge badgeContent={listaCompras.length} color="secondary">
					<ShoppingCart color="action" />
					</Badge>
					</NavLink>
				</div>
			</div>
		</nav>
		
		
	)
}