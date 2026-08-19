export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// Remove one unit of an item from the cart.
// If the quantity is more than 1, just decrement it; otherwise remove the item entirely.
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // Find the matching item in the current cart.
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    // If the item exists and there is more than one in the cart, reduce the quantity by 1.
    if (existingCartItem && existingCartItem.quantity > 1) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }

    // If the last item is being removed, delete it from the cart array.
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};