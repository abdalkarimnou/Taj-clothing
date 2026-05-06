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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;