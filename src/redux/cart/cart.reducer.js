import CartActionTypes from './cart.types';

// Initial state for the cart reducer.
// hidden: whether the dropdown cart is currently hidden.
// cartItems: the list of items currently in the cart.
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.toggleCartHidden:
            // Toggle the hidden state to show or hide the cart dropdown.
            return {
                ...state,
                hidden: !state.hidden
            };

        case CartActionTypes.addItem:
            // Add a new cart item from the action payload.
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };

        default:
            // If the action is not handled, return the current state unchanged.
            return state;
    }
};

export default cartReducer;