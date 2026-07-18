import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'; 
import CheckoutItem from '../../components/checkout-item/checkout-item.component';  

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        {/*
         * Render a `CheckoutItem` for every entry in `cartItems`:
         * - `cartItems.map(...)` iterates the array and returns a React node per item.
         * - `key={cartItem.id}` provides a stable identity so React can efficiently
         *   update, reorder, and remove items in the list.
         * - `cartItem={cartItem}` passes the whole item object down so the child
         *   component can access `name`, `imageUrl`, `price`, and `quantity`.
         *
         * Note: when adding interactivity (remove/increment/decrement) pass
         * handler callbacks as additional props to `CheckoutItem` so the child
         * can call back into Redux actions or parent handlers.
         */}
        {cartItems.map(cartItem => (
            <CheckoutItem
                key={cartItem.id}
                cartItem={cartItem}
            />
        ))}

        <div className='total'>  
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);