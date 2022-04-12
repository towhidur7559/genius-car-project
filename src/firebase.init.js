// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5_kJ0BqgE6MFqdwtmSGwYR0lf69Oihl4",
  authDomain: "genius-car-services-4d445.firebaseapp.com",
  projectId: "genius-car-services-4d445",
  storageBucket: "genius-car-services-4d445.appspot.com",
  messagingSenderId: "1097330202260",
  appId: "1:1097330202260:web:0d5380cfca049e536e4681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;