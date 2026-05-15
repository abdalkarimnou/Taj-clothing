import React from "react";
import './header.styles.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";

// Header component receives currentUser and hidden from Redux.
// `currentUser` controls authentication links; `hidden` controls cart dropdown visibility.
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

        {/* Render the cart dropdown only when `hidden` is false. */}
        {hidden ? null : <CartDropdown />}
    </div>
);

// Retrieve values from the Redux store and pass them as props to Header.
// `currentUser` is used to decide whether to show SIGN IN or SIGN OUT.
// `hidden` is used to control whether the cart dropdown is visible.
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);