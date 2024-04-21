import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD577yo1FG7AkykvVhBl0P3fl3u6PkIay8",
  authDomain: "e-commerce-clothing-a453d.firebaseapp.com",
  projectId: "e-commerce-clothing-a453d",
  storageBucket: "e-commerce-clothing-a453d.appspot.com",
  messagingSenderId: "375147427988",
  appId: "1:375147427988:web:471ee526c05a531e459c81",
};

const app = initializeApp(firebaseConfig);

// select which account to sign in with
// GoogleAuthProvider is a class, so needs new keyword
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// can only be on auth token
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
