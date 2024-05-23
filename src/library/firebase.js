import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyBYKGxW6ir00tOO9KVzGDv8XEQK5Goj_eU",
  authDomain: "chatbot-8b5e0.firebaseapp.com",
  projectId: "chatbot-8b5e0",
  storageBucket: "chatbot-8b5e0.appspot.com",
  messagingSenderId: "1039579743453",
  appId: "1:1039579743453:web:b5483a2247ee5027d40734"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db =getFirestore()
export const storage = getStorage() 