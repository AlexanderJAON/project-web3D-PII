// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP0rztnl1EP-eyFjW-KW2EdKL7JDV3bVs",
  authDomain: "aqua-code.firebaseapp.com",
  projectId: "aqua-code",
  storageBucket: "aqua-code.appspot.com",
  messagingSenderId: "627792496487",
  appId: "1:627792496487:web:82355f8971feb39aa611c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};