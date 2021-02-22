import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ5sskNF4Y7fwk64uAzdpaiFgu7QNhWJM",
  authDomain: "clone-7abac.firebaseapp.com",
  projectId: "clone-7abac",
  storageBucket: "clone-7abac.appspot.com",
  messagingSenderId: "798011782324",
  appId: "1:798011782324:web:6f2218ce048c6b871813e1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
