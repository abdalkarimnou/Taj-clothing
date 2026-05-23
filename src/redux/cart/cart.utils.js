// Utility that updates the cart items array when a new item is added.
// If the item already exists in the cart, it increments the quantity.
// Otherwise, it adds the new item with quantity 1.
export const addItemsToCart = (cartItems, cartItemToAdd) => {
    // Find an existing cart item with the same id.
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        // If the item is already in the cart, return a new array
        // where the matching item gets quantity +1.
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // If the item is not in cart yet, add it with initial quantity 1.
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};