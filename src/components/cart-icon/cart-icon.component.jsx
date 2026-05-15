import React from "react";
import './cart-icon.styles.scss';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";  
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; 

// Functional component for the cart icon in the header.
// Clicking the icon dispatches the toggleCartHidden action to open/close the cart dropdown.
const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
);

// mapDispatchToProps gives the component a prop function that dispatches the action.
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);