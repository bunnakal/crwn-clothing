import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCsLmdgljUHPu4teOLlQ_m27lhMkNxkoAA",
  authDomain: "crwn-db-bf7dc.firebaseapp.com",
  databaseURL: "https://crwn-db-bf7dc.firebaseio.com",
  projectId: "crwn-db-bf7dc",
  storageBucket: "crwn-db-bf7dc.appspot.com",
  messagingSenderId: "118223166129",
  appId: "1:118223166129:web:8c55c6a125f4fad4746090",
  measurementId: "G-QN39NLCF0P"
}

firebase.initializeApp(config);

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;