import {createSelector} from 'reselect';
const selectCart = state => state.cart;
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// Selector for the cart dropdown visibility flag.
// Components can use this derived value to show or hide the cart UI
// without reading the entire cart state directly.
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
); 

export const  selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>
         accumulatedQuantity + cartItem.quantity, 0)
); 