import firebase from "firebase/compat/app";
//For authentication
import {getAuth} from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWTQUgzLtlPMQ6hLx8lzVxQ3eRVHg0_4Y",
  authDomain: "clone-9a36e.firebaseapp.com",
  projectId: "clone-9a36e",
  storageBucket: "clone-9a36e.appspot.com",
  messagingSenderId: "999002914056",
  appId: "1:999002914056:web:8510a8aec236ba529980bd",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()