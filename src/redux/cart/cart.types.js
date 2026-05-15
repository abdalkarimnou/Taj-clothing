// Define the available action types for cart-related Redux actions.
// Using a separate object for action type strings helps avoid typos
// and makes it easier to reuse the same action type in actions and reducers.
const CartActionTypes = {
    // Action type for toggling whether the cart dropdown is visible or hidden.
    toggleCartHidden: 'TOGGLE_CART_HIDDEN'
};

export default CartActionTypes;