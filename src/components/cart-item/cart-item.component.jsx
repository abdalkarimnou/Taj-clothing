import React from "react";
import './cart-item.styles.scss';

// CartItem renders one item inside the shopping cart dropdown.
// It receives an item object via props and destructures the fields
// needed for display: imageUrl, price, name and quantity.
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        {/* Product image in the cart list */}
        <img src={imageUrl} alt={name} />
        <div className='item-details'>
            {/* Product name shown next to the thumbnail */}
            <span className='name'>{name}</span>
            {/* Quantity and single-item price summary */}
            <span className='price'>
              {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem;