import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe8PSjt5ND3VFeHpmvaNtI8WId5Iwq6cU",
  authDomain: "fir-react-47b57.firebaseapp.com",
  projectId: "fir-react-47b57",
  storageBucket: "fir-react-47b57.appspot.com",
  messagingSenderId: "370608462232",
  appId: "1:370608462232:web:8344a8bb4acb118ed2f3ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);