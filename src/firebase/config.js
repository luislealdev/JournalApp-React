// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQprKklLaKC4X9EFFg8ZPHVJgD015-P5A",
  authDomain: "reactcourse-fb0a0.firebaseapp.com",
  projectId: "reactcourse-fb0a0",
  storageBucket: "reactcourse-fb0a0.appspot.com",
  messagingSenderId: "1099251942738",
  appId: "1:1099251942738:web:20ecde09f9d1eab7a8e68b"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);


