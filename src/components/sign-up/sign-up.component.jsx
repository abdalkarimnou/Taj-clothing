import React from "react";
import './sign-up.styles.scss';
import FormInput from "../form-input/form-inpu.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '', 
            password: '',
            confirmPassword: ''
        }
    }   
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() { 
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2> 
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>  
                </form>
            </div>
        );
    }
}

export default SignUp;