import React from 'react';
import './App.css';
import Homepage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ShopPage from './pages/shop/shop.component'; 
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';  
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// Redux action that will update the `currentUser` in the store
import { setCurrentUser } from './redux/user/user.actions';
class App extends React.Component {
 
 unsubscribeFromAuth = null;
  
  componentDidMount() {
    // `setCurrentUser` is supplied via mapDispatchToProps and will dispatch
    // the action to store the authenticated user in Redux.
    const { setCurrentUser } = this.props;

    // Subscribe to Firebase auth state changes. The listener returns an
    // unsubscribe function which we keep as `this.unsubscribeFromAuth` so
    // we can stop listening in componentWillUnmount and avoid leaks.
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      // If a user is signed in, create/get their Firestore profile document
      // and listen for snapshot updates. When the snapshot arrives we
      // dispatch `setCurrentUser` with the user's id and stored data.
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        // If no user is signed in (userAuth is null), clear the currentUser
        // in Redux so the app knows the user is signed out.
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

}
// mapDispatchToProps
// - Provides action dispatcher props to the component. Here we expose
//   `setCurrentUser` as a prop so the App can dispatch the action to update
//   Redux state when auth changes occur.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// Connect the App component to Redux with only dispatch props (no state).
// This returns a higher-order component that injects `setCurrentUser` into
// App's props and allows the component to dispatch user-related actions.
export default connect(null, mapDispatchToProps)(App);