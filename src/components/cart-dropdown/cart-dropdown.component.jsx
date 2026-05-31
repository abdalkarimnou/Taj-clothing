import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// CartDropdown renders the list of items currently in the cart.
// It receives cartItems from Redux state and maps each one to a CartItem component.
const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        {/* Checkout button shown below the list of cart items */}
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// mapStateToProps uses a memoized selector to derive cartItems from state.
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);