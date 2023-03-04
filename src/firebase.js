import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA3WgH3mItcchucCYbKD31pML88q-wTcC0",
  authDomain: "chat-cc3c0.firebaseapp.com",
  projectId: "chat-cc3c0",
  storageBucket: "chat-cc3c0.appspot.com",
  messagingSenderId: "724180783184",
  appId: "1:724180783184:web:22703ec4d6eb9d1a508155"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();