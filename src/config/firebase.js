// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0xER0ysyw-z1uyCs-kcGP1w2vNZTxYLU",
  authDomain: "vite-contact-436ab.firebaseapp.com",
  projectId: "vite-contact-436ab",
  storageBucket: "vite-contact-436ab.appspot.com",
  messagingSenderId: "365789397584",
  appId: "1:365789397584:web:b8867abc2d18df85518755"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);