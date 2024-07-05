


import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF19ODGzDZoi64V_mdAFQPqkYDS7dLswM",
  authDomain: "cinema-5cfd4.firebaseapp.com",
  projectId: "cinema-5cfd4",
  storageBucket: "cinema-5cfd4.appspot.com",
  messagingSenderId: "65458502128",
  appId: "1:65458502128:web:a485f94fb42a1c9af6c535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()