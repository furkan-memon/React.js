import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbepgEjcFLBir9mTZjw5fwZAJbNgIaldc",
  authDomain: "fir-af026.firebaseapp.com",
  projectId: "fir-af026",
  storageBucket: "fir-af026.appspot.com", // ✅ FIXED
  messagingSenderId: "794040370937",
  appId: "1:794040370937:web:cfaf63c2416cbfc9840428",
  measurementId: "G-L2LBZB6GBN"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);