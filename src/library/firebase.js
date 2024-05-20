import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEuBXDfr9Fp18hYhprnD-znYHTRIw1Oeo",
  authDomain: "react-chatapp-dc8f7.firebaseapp.com",
  projectId: "react-chatapp-dc8f7",
  storageBucket: "react-chatapp-dc8f7.appspot.com",
  messagingSenderId: "518978648478",
  appId: "1:518978648478:web:66f524d82ce1c86287fe8f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
