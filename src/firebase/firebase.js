import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAupMpnxaGisavbqFykKtPxPYIuZ95E3kI",
  authDomain: "react-firebase-login-2b6f2.firebaseapp.com",
  projectId: "react-firebase-login-2b6f2",
  storageBucket: "react-firebase-login-2b6f2.appspot.com",
  messagingSenderId: "545327369973",
  appId: "1:545327369973:web:d5342871a008b387627fbc",
  measurementId: "G-JSXJ6E9Z6R"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;