import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-inpu.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
    constructor() {
        super();  
        this.state = {
            email: '',
            password: ''
        }
    }   
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }   

    handelChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }   

    render() {
        return (
            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                name="email"
                type="email"
                value={this.state.email}
                handleChange={this.handelChange}
                label="Email"
                required
                />
                <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handelChange}
                label="Password"
                required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn={true}>
                        Sign In with Google
                    </CustomButton>
                </div>
            </form>
            </div>
        );
    }
}

export default SignIn;