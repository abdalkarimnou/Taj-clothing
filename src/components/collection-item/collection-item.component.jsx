import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

// CollectionItem is a presentational component that renders a product inside a shop collection.
// It receives the item data as props and displays the image, name, price, and add-to-cart button.
const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collection-item">
        {/* Product image is rendered as a background-image so we can control sizing and overlay styles */}
        <div className="image" style={{ backgroundImage: `url(${imageUrl})`}} />

        {/* Footer section displays the product title and price */}
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>

        {/* Reusable button component with inverted styling for the add-to-cart action */}
        <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
);

export default CollectionItem;