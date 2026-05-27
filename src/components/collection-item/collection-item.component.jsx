import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

// CollectionItem displays a single product card inside the shop page.
// It renders the product image, name, and price, and provides a button
// to add the product to the cart through a Redux action.
const CollectionItem = ({ item, addItem }) => {
    // Destructure the product fields from the item prop passed in by the parent.
    const { name, price, imageUrl, id } = item;
    return (
        <div className="collection-item">
            {/* Render the product image using a CSS background */}
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                {/* Product name displayed below the image */}
                <span className="name">{name}</span>
                {/* Product price displayed alongside the name */}
                <span className="price">{price}</span>
            </div>
            {/* Dispatch addItem when the button is clicked */}
            <CustomButton inverted onClick={() => addItem(item)}>
                ADD TO CART
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);