// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBYCjlC6L7r-um8qrzpXOufUOnmN3qVB40',
  authDomain: 'players-460c7.firebaseapp.com',
  projectId: 'players-460c7',
  storageBucket: 'players-460c7.appspot.com',
  messagingSenderId: '734505406701',
  appId: '1:734505406701:web:5e8c453bafa17f9c90bce4',
  measurementId: 'G-FEWBECEL1G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
