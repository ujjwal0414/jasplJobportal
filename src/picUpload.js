// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeL-gZXlLdJXVKzkmAkoLoioReCWwY7BM",
  authDomain: "react-auth-28a68.firebaseapp.com",
  projectId: "react-auth-28a68",
  storageBucket: "react-auth-28a68.appspot.com",
  messagingSenderId: "24526424291",
  appId: "1:24526424291:web:bef37fe01e53324202ddd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const UploadPic=getStorage(app);