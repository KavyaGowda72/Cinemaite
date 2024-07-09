


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE0zEtL9Dvm9oWk0h4XA_x3BFhj95CGmE",
  authDomain: "cinema-4ebd4.firebaseapp.com",
  projectId: "cinema-4ebd4",
  storageBucket: "cinema-4ebd4.appspot.com",
  messagingSenderId: "1030019146731",
  appId: "1:1030019146731:web:224cd758bb8db8ad41afae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()