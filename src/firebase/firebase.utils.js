import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5YnL5u1QWQA2ybfJ_cbyTDhpkYhPqWIE",
    authDomain: "openan77-db-74f6d.firebaseapp.com",
    projectId: "openan77-db-74f6d",
    storageBucket: "openan77-db-74f6d.appspot.com",
    messagingSenderId: "991000355934",
    appId: "1:991000355934:web:7d5cab5409ab8afff240cf",
    measurementId: "G-HRN6NXRN1D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;