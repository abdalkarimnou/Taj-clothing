import React from "react";
import './header.styles.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";
// createStructuredSelector allows us to pass multiple memoized selectors
// while keeping mapStateToProps concise and easy to read.
import { createStructuredSelector } from "reselect";
// Selector that returns the current authenticated user from Redux state.
import { selectCurrentUser } from "../../redux/user/user.selector";
// Selector that returns whether the cart dropdown is hidden from Redux state.
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            )  :  (
                <Link className="option" to="/sign-in">SIGN IN</Link>
            )}
                <CartIcon />
        </div>
        {hidden ? null : <CartDropdown /> }
    </div>
);

// Map Redux state into Header props using memoized selectors.
// `currentUser` controls whether the sign-in link or sign-out option is shown,
// while `hidden` determines whether the cart dropdown should be displayed.
const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// Connect Header to Redux so it receives selected state as props.
// This higher-order component injects currentUser and hidden into Header,
// enabling conditional rendering of authentication links and the cart dropdown.
export default connect(mapStateToProps)(Header);