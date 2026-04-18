import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyB-HfeSdw_c5KiYhdY1UXufq_FTWYAfwjU",
  authDomain: "taj-clothing-db.firebaseapp.com",
  projectId: "taj-clothing-db",
  storageBucket: "taj-clothing-db.firebasestorage.app",
  messagingSenderId: "893981145332",
  appId: "1:893981145332:web:0a3e8e5e50bc15588d06a1",
  measurementId: "G-Q058QY9PEF"
};

// createUserProfileDocument
// - Ensures a Firestore document exists for an authenticated user.
// - If the user document doesn't exist, it creates one with displayName, email,
//   createdAt and any additionalData passed in. Returns the document reference
//   (`userRef`) so callers can attach listeners or read the user data.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user profile', error);
    }
  }
  return userRef;
};

// Initialize Firebase app with the provided configuration object.
// This must be called before using `auth` or `firestore` services.
firebase.initializeApp(config);

// Export commonly used Firebase services
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Configure Google auth provider
// - `prompt: 'select_account'` forces the account selector each time so the
//   user can choose which Google account to sign in with.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Helper that triggers a Google OAuth popup. Callers can import and use this
// to start the sign-in flow (e.g. on a button click).
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Default export the firebase instance in case other modules need lower-level
// access to SDK functionality.
export default firebase;