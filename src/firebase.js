// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeL-gZXlLdJXVKzkmAkoLoioReCWwY7BM",
  authDomain: "react-auth-28a68.firebaseapp.com",
  projectId: "react-auth-28a68",
  storageBucket: "react-auth-28a68.appspot.com",
  messagingSenderId: "24526424291",
  appId: "1:24526424291:web:99734d8e79cbc6f902ddd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}