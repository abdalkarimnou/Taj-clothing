import CartActionTypes from "./cart.types";

// Action creator for toggling the cart dropdown visibility.
// When dispatched, the cart reducer will update visibility state.
export const toggleCartHidden = () => ({
    type: CartActionTypes.toggleCartHidden
});

// Action creator for adding an item to the cart.
// The item is passed as the `payload` and handled by the cart reducer.
export const addItem = item => ({
    type: CartActionTypes.addItem,
    payload: item
});