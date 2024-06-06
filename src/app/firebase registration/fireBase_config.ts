// firebaseConfig.js
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsImvm2hFgqiFec5SDbwASz2s0HLo1xUA",
  authDomain: "registration-cee3f.firebaseapp.com",
  projectId: "registration-cee3f",
  storageBucket: "registration-cee3f.appspot.com",
  messagingSenderId: "578969563470",
  appId: "1:578969563470:web:650070eb138114c1032e1f",
  measurementId: "G-J3ZBF09TXX",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
