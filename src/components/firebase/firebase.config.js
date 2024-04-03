// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsXIyCdFjffQPyyBQfgWDVmgLphobRiYM",
  authDomain: "email-auth-1d21b.firebaseapp.com",
  projectId: "email-auth-1d21b",
  storageBucket: "email-auth-1d21b.appspot.com",
  messagingSenderId: "1022346788757",
  appId: "1:1022346788757:web:b90bad3e48c7151e13809c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
