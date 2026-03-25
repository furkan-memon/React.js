import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth } from "./firebaseConfig";

// Provider
const provider = new GoogleAuthProvider();

// ✅ Signup
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// ✅ Login
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// ✅ Google Login
export const googleLogin = () => {
  return signInWithPopup(auth, provider);
};

// ✅ Logout
export const logout = () => {
  return signOut(auth);
};