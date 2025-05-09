// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: 'cool-barber-65ddf.firebaseapp.com',
  projectId: 'cool-barber-65ddf',
  storageBucket: 'cool-barber-65ddf.firebasestorage.app',
  messagingSenderId: '386430998573',
  appId: '1:386430998573:web:41d8cf6f961e3dadce40a4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
