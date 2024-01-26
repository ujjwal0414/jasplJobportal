// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw9s3NECnXVUuCG21uYRWIErR5MR3cXWM",
  authDomain: "jasplchat.firebaseapp.com",
  projectId: "jasplchat",
  storageBucket: "jasplchat.appspot.com",
  messagingSenderId: "33353279240",
  appId: "1:33353279240:web:8abd0593f1539fa7c12ebd"
};

// Initialize Firebase
const messApp = initializeApp(firebaseConfig);

export  {messApp}