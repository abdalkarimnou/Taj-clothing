// Defines the action type constants used by the cart reducer/actions.
// Keeping these values in one place helps avoid typos when dispatching actions.
const CartActionTypes = {
    // Toggle whether the cart dropdown is visible or hidden
    toggleCartHidden: 'TOGGLE_CART_HIDDEN',

    // Add a product item into the cart
    addItem: 'ADD_ITEM'
};

export default CartActionTypes;