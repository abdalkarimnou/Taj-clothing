import CartActionTypes from "./cart.types";

// Action creator for toggling the cart dropdown visibility.
// This returns a Redux action with the type value defined in cart.types.
export const toggleCartHidden = () => ({
    type: CartActionTypes.toggleCartHidden
});