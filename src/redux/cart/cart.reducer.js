import CartActionTypes from './cart.types';

// Initial state for the cart reducer.
// `hidden` controls whether the cart dropdown is visible.
const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // When the cart hidden toggle action is dispatched,
        // return a new state object with the `hidden` flag flipped.
        case CartActionTypes.toggleCartHidden:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            // For any other action, return the current state unchanged.
            return state;
    }
};

export default cartReducer;