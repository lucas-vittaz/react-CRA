import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='logo' />
				<h1 className='title'>La maison jungle</h1>
			</Banner>
			<div className='layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)
}

export default App
