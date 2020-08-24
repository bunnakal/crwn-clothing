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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;