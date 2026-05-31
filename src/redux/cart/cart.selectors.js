import { createSelector } from 'reselect';

// Select the cart slice from the Redux root state.
const selectCart = state => state.cart;

// Memoized selector that returns the list of items in the cart.
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// Memoized selector that computes the total number of items in the cart.
// It reduces the cartItems array by summing each cart item's quantity.
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    )
);