import './Basket.scss';
import BasketProduct from '../basketProduct/BasketProduct';
import PropTypes from 'prop-types';

export default function Basket({ isBasketOpen }) {

	Basket.propTypes = {
		isBasketOpen: PropTypes.bool.isRequired,
	};

	return (
		<section className={isBasketOpen ? 'basket open' : 'basket'}>
			<div className='basket__container'>
				<div className="basket__header">
					<h2 className='basket__title'>Cart</h2>
				</div>
				<BasketProduct />
			</div>
		</section>
	)
}