import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const lineTotal = Number(price) * Number(quantity);

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>

      <span className='name'>
        <span className='mobile-label'>Product</span>
        {name}
      </span>

      <span className='quantity'>
        <span className='mobile-label'>Quantity</span>
        <span className='quantity-controls'>
          <button
            type='button'
            className='arrow'
            aria-label={`Decrease quantity of ${name}`}
            onClick={() => removeItem(cartItem)}
          >
            &#10094;
          </button>
          <span className='value'>{quantity}</span>
          <button
            type='button'
            className='arrow'
            aria-label={`Increase quantity of ${name}`}
            onClick={() => addItem(cartItem)}
          >
            &#10095;
          </button>
        </span>
      </span>

      <span className='unit-price'>
        <span className='mobile-label'>Unit price</span>
        ${Number(price).toFixed(2)}
      </span>

      <span className='line-total'>
        <span className='mobile-label'>Line total</span>
        ${lineTotal.toFixed(2)}
      </span>

      <button
        type='button'
        className='remove-button'
        aria-label={`Remove ${name} from cart`}
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
