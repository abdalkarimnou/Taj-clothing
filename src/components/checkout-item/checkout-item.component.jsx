import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

// This component receives the selected cart item and the Redux action handlers as props.
const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    // Destructure the item details needed to render the checkout row.
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                {/* Decrease the amount of this item in the cart when the left arrow is clicked. */}
                <div className='arrow' onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                {/* Increase the amount of this item in the cart when the right arrow is clicked. */}
                <div className='arrow' onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            {/* Show the total quantity value for this line item in the checkout summary. */}
            <span className='price'>
                ${quantity}
            </span>
            <span className='price'>${price.toFixed(2)}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

// Connect this component to Redux so it can trigger cart actions.
// Each function sends an action creator result to the store's dispatch method.
const mapDispatchToProps = dispatch => ({
    // Remove the entire item from the cart.
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    // Add one more of the same item to the cart.
    addItem: item => dispatch(addItem(item)),
    // Remove one unit of the item from the cart.
    removeItem: item => dispatch(removeItem(item))
});

// Export the connected component so it can access cart actions via props.
export default connect(null, mapDispatchToProps)(CheckoutItem);