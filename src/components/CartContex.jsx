import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product, quantity) => {
		if(quantity <= 0) return;
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				return prevCart.map((item) =>
					item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
				);
			} else {
				return [...prevCart, { ...product, quantity: quantity }]
			}
		})
	};

	const removeFromCart = (productId) => { 
		setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>)
}

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
