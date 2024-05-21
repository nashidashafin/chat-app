import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFmrg57-Q-xh85uRwMQnK1fk7bpw3qYjE",
  authDomain: "react-chat-demo-4c5a0.firebaseapp.com",
  projectId: "react-chat-demo-4c5a0",
  storageBucket: "react-chat-demo-4c5a0.appspot.com",
  messagingSenderId: "679097068289",
  appId: "1:679097068289:web:0fe209e834e5cd5577c900",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
