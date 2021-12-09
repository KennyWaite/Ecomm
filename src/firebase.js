// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQKXjEkG4MeOKAAO66mSeFu40m24Wj34k",
    authDomain: "e-commerce-a436b.firebaseapp.com",
    projectId: "e-commerce-a436b",
    storageBucket: "e-commerce-a436b.appspot.com",
    messagingSenderId: "643940276251",
    appId: "1:643940276251:web:4df345124659d52f43c0be",
    measurementId: "G-SE6L7228TD",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
