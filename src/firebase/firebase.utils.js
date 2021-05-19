import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAc59VOQM0oxIVBnGaLhbTm2IaTnuO_Kh8",
    authDomain: "crwn-db-507ff.firebaseapp.com",
    projectId: "crwn-db-507ff",
    storageBucket: "crwn-db-507ff.appspot.com",
    messagingSenderId: "215063727787",
    appId: "1:215063727787:web:f4ae35469878a131ae71ee",
    measurementId: "G-FTKC0HCY81"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default signInWithGoogle;