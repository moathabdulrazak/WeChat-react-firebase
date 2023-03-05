import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDd70bFmXqMHnA-yP_5R267FzIE87swbAQ",
  authDomain: "chat-1c0ed.firebaseapp.com",
  projectId: "chat-1c0ed",
  storageBucket: "chat-1c0ed.appspot.com",
  messagingSenderId: "638414803557",
  appId: "1:638414803557:web:d00a8a6e8c4a32f7596c8c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();

export const db = getFirestore()