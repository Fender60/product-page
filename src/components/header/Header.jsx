import './Header.scss';
import CartIcon from "../../../public/images/icon-cart.svg?component";
import Logo from "../../../public/images/logo.svg?component";
import Burger from '../burger/Burger';
import Basket from '../basket/Basket';
import { useState } from 'react';
import { useCart } from '../CartContex';

export default function Header() {

	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isBasketOpen, setIsBasketOpen] = useState(false);
	const { cart } = useCart();

	const toggleBasket = () => {
		setIsBasketOpen(!isBasketOpen);
	};

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<header className="header">
			<div className="header__container">
				<Burger isNavOpen={isNavOpen} toggleNav={toggleNav} />
				<div
					className={`overlay ${isNavOpen ? "active" : ""}`}
					onClick={toggleNav}
				></div>
				<div className="header__logo">
					<a href="#"><Logo className="logo" /></a>
				</div>
				<nav className={isNavOpen ? 'header__nav open' : 'header__nav'}>
					<ul className="header__nav-list">
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Collections</a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Men</a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Women</a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">About</a>
						</li>
						<li className="header__nav-item">
							<a href="#" className="header__nav-link">Contact</a>
						</li>
					</ul>
				</nav>
				<div className="header__icons">
					<button className="header__icons-cart" onClick = {toggleBasket}>
						<CartIcon className="cart" />
						{cart.length > 0 && <span className="cart-quantity">{cart.length}</span>}
					</button>
					<Basket isBasketOpen = {isBasketOpen}/>
					<button className='header__icons-avatar'><img src="../../../public/images/image-avatar.png" alt="avatar" /></button>
				</div>
			</div>
		</header>
	)
}