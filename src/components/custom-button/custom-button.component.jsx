import React from "react";
import './custom-button.styles.scss';

// CustomButton renders a reusable button with optional style variants.
// It accepts any children content and passes through extra props such as onClick.
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;