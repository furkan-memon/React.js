import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbepgEjcFLBir9mTZjw5fwZAJbNgIaldc",
  authDomain: "fir-af026.firebaseapp.com",
  projectId: "fir-af026",
  storageBucket: "fir-af026.firebasestorage.app",
  messagingSenderId: "794040370937",
  appId: "1:794040370937:web:cfaf63c2416cbfc9840428",
  measurementId: "G-L2LBZB6GBN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);