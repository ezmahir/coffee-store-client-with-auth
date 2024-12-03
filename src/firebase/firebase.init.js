// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7L4NIuX4krSTQebF71GN0ZEiv1FZLfmM",
  authDomain: "coffee-store-9c377.firebaseapp.com",
  projectId: "coffee-store-9c377",
  storageBucket: "coffee-store-9c377.firebasestorage.app",
  messagingSenderId: "1041604409659",
  appId: "1:1041604409659:web:180bf9bef0d99a90de1f1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
