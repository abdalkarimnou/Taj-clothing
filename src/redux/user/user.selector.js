import { createSelector } from 'reselect';

// Base selector for the user slice of the Redux state.
// This keeps the selector logic simple and reusable across other user-related selectors.
const selectUser = state => state.user;

// Memoized selector that derives the current authenticated user object.
// Because it is created with reselect, it will only recompute when state.user changes,
// which optimizes renders for any component that depends on currentUser.
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
); 