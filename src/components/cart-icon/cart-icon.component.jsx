import React from "react";
import './cart-icon.styles.scss';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";  
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; 

// CartIcon displays the cart icon and current item count in the header.
// Clicking the icon toggles the visibility of the cart dropdown.
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        {/* Badge showing total number of items currently in cart */}
        <span className="item-count">{itemCount}</span>
    </div>
);

// Dispatches the action to show/hide the cart dropdown.
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Selects the derived cart item count from Redux state using a memoized selector.
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);