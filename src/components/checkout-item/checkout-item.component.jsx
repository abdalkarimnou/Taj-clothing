import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem:{ name, imageUrl, price, quantity } }) => {
    // Destructuring note:
    // We pull `name`, `imageUrl`, `price`, and `quantity` directly from the
    // `cartItem` prop. This keeps the JSX below concise but assumes
    // `cartItem` is defined; guard or default props may be needed upstream.
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                {/*
                 * Product thumbnail:
                 * - `src` comes from the item's `imageUrl`.
                 * - `alt` should describe the image for accessibility; using the
                 *   product `name` is preferable to a generic label.
                 */}
                <img src={imageUrl} alt={name || 'item'} />
            </div>

            {/* Product name (plain text display) */}
            <span className='name'>{name}</span>

            {/* Quantity display: consider adding controls (±) and handlers here */}
            <span className='quantity'>{quantity}</span>

            {/*
             * Price display:
             * - `toFixed(2)` ensures two decimal places for currency-like values.
             * - For proper localization use `Intl.NumberFormat` instead.
             */}
            <span className='price'>${price.toFixed(2)}</span>

            {/*
             * Remove button placeholder:
             * - Uses a visually simple × character. Add an `onClick` handler
             *   and `aria-label` when wiring up removal behavior to improve
             *   accessibility and interactivity.
             */}
            <div className='remove-button'>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;