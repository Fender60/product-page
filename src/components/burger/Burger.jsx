import './Burger.scss';
import PropTypes from 'prop-types';

Burger.propTypes = {
	isNavOpen: PropTypes.bool.isRequired,
	toggleNav: PropTypes.func.isRequired,
};

export default function Burger({ isNavOpen, toggleNav }) {

	return (
		<div
			className={isNavOpen ? 'burger open' : 'burger'}
			onClick={toggleNav}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}