import './BasketProduct.scss';
import RemoveIcon from '../../../public/images/icon-delete.svg?component';
import Button from '../button/Button';
import { useCart } from '../CartContex';

export default function BasketProduct() {

	const { cart, removeFromCart } = useCart();

	const cartTotal = cart.reduce((sum, item) => sum + (item.newPrice * item.quantity) || 0, 0);

	return (
		<>
			{cart.length === 0 ? (
				<div className="basket__empty">Your cart is empty.</div>
			) : (
				<div>
					<div className="product">
						<div className="product__image">
							<img src='./images/image-product-1-thumbnail.jpg' alt="product" />
						</div>
						<div className="product__info">
							<h3 className="product__title">{cart[0].name}</h3>
							<div className="product__details">
								<p className="product__price">${cart[0].newPrice}</p>
								<p className="product__quantity">x {cart[0].quantity}</p>
							</div>
						</div>
						<button onClick={() => removeFromCart(cart[0].id)} className="product__remove">
							<RemoveIcon className="product__remove--icon" />
						</button>
					</div>
					<div className="total">Total: <b>${cartTotal}</b></div>
					<div><Button>Checkout</Button></div>
				</div>
			)}
		</>
	)
}