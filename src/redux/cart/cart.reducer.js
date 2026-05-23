import CartActionTypes from './cart.types';
import { addItemsToCart } from './cart.utils';
const  INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.toggleCartHidden:
            // Toggle the cart dropdown between visible and hidden.
            return {
                ...state,
                hidden: !state.hidden
            };

        case CartActionTypes.addItem:
            // Add an item to the cart using the helper function.
            // This preserves immutability and updates quantity if needed.
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            };

        default:
            // For any other action, keep the current state unchanged.
            return state;
    }
};
export default cartReducer;