import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyAh0YpI-2LJDXA3GHBDlDXuUmHRMZz7MpM",
  authDomain: "noname-digital-3a76b.firebaseapp.com",
  projectId: "noname-digital-3a76b",
  storageBucket: "noname-digital-3a76b.appspot.com",
  messagingSenderId: "545906068245",
  appId: "1:545906068245:web:20e289509bdfd9f9ebb71c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
