import classes from './Button.module.scss'
import PropTypes from 'prop-types';

export default function Button({onClick, children}) {
	return (
		<button onClick={onClick} className={classes.button}>{children}</button>
	)
}

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};