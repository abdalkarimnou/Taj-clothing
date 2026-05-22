import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

// CollectionItem receives two props:
// - item: the product object to display
// - addItem: a Redux dispatcher function injected via connect
const CollectionItem = ({ item, addItem }) => {
    // Destructure the item object so we can use its fields directly.
    const { name, price, imageUrl, id } = item;
    return (
    <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})`}} />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton inverted onClick={() => addItem({ item })}>
            ADD TO CART
        </CustomButton>
    </div>
)};

// mapDispatchToProps lets this component dispatch Redux actions.
// We provide one prop, addItem, which wraps the addItem action creator.
// Calling addItem(item) will dispatch the action to update the cart state.
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

// Connect the component to Redux with no state props (null) and the dispatch props.
export default connect(null, mapDispatchToProps)(CollectionItem);