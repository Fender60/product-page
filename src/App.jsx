import './App.scss';
import Header from './components/header/Header';
import ProductCard from './components/productCard/ProductCard';
import { CartProvider } from './components/CartContex';

export default function App() {
	
	return (
		<>
			<CartProvider>
				<Header />
				<main>
					<ProductCard />
				</main>
			</CartProvider>
		</>
	)
}