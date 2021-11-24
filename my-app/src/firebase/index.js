import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDoQf6JNAsgbq-To9DvyKf-OWs-FB6gU5c",
  authDomain: "react-e81d3.firebaseapp.com",
  projectId: "react-e81d3",
  storageBucket: "react-e81d3.appspot.com",
  messagingSenderId: "36110319642",
  appId: "1:36110319642:web:e8cac7224da7edf98d91a3",
  measurementId: "G-8QSPZ4ENMX",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
