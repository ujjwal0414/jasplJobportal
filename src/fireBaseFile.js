// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "jasplprofile.firebaseapp.com",
  projectId: "jasplprofile",
  storageBucket: "jasplprofile.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESS_ID,
  appId:process.env.REACT_APP_ID_APP
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase Storage instance
const storage = getStorage(firebaseApp);
const auth=getAuth(firebaseApp)
export { storage,firebaseApp ,auth}; 