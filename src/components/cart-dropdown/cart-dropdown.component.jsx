import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

// CartDropdown is the floating cart preview shown when the cart icon is clicked.
// It receives the current cart items from Redux state and renders a list of CartItem components.
const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        {/* Checkout button shown at the bottom of the dropdown */}
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// Selects cartItems from the Redux store's cart slice.
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

// Connects CartDropdown to Redux so it can access the current cart items.
export default connect(mapStateToProps)(CartDropdown);