import './ProductCard.scss';
import Button from '../button/Button';
import CartIcon from "../../../public/images/icon-cart.svg?component";
import DecrementIcon from "../../../public/images/icon-minus.svg?component";
import IncrementIcon from "../../../public/images/icon-plus.svg?component";
import Slider from '../slider/Slider';
import SliderFull from '../slider-fullScreen/SliderFull';
import { useEffect, useState } from 'react';
import { useCart } from '../CartContex';

export default function ProductCard() {

	const [quantity, setQuantity] = useState(1);
	const [data, setData] = useState([]);
	const [isSliderOpen, setIsSliderOpen] = useState(false);
	const { addToCart } = useCart();

	const toggleSlider = () => {
		let screenWidth = window.innerWidth;
		if(screenWidth > 902 || isSliderOpen) {
			setIsSliderOpen(!isSliderOpen);
		}
	}

	useEffect(() => {
		fetch("/data.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error");
				}
				return response.json();
			})
			.then((json) => setData(json))
			.catch((error) => console.error(error));
	}, []);

	const increment = () => {
		setQuantity(quantity + 1);
	};

	const decrement = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
	};


	return (
		<>
			{data.length === 0 ? (
				<p>Loading...</p>
			) : (
				<article className="card">
					<div className={`card__slider-full ${isSliderOpen ? "active" : ""}`}>
						<SliderFull onClose={toggleSlider}/>
						</div>
					<div className='card__container'>
						<div className='card__slider'><Slider onClick={toggleSlider}/></div>
						<div className="card__information">
							<h3 className='card__information-brand'>{data[0].brand}</h3>
							<h1 className='card__information-title'>{data[0].name}</h1>
							<p className='card__information-description'>{data[0].description}</p>
							<div className="card__information-price">
								<span className='card__information-price--new'>${data[0].newPrice.toFixed(2)}</span>
								<span className='card__information-price--discount'>{data[0].discount}%</span>
								<span className='card__information-price--original'>${data[0].price.toFixed(2)}</span>
							</div>
							<div className="card__addbasket">
								<div className="card__addbasket-counter">
									<button className='card__addbasket-counter--decrement' onClick={decrement}><DecrementIcon /></button>
									<span className='card__addbasket-counter--value'>{quantity}</span>
									<button className='card__addbasket-counter--increment' onClick={increment}><IncrementIcon /></button>
								</div>
								<Button onClick = {() => addToCart(data[0], quantity)}><CartIcon className="button-icon" /> Add to cart</Button>
							</div>
						</div>
					</div>
				</article>
			)}
		</>
	)
}