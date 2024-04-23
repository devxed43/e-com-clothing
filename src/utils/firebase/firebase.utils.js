import { initializeApp } from "firebase/app";

// Firebase Authentication Library
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Firestore Database Library
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD577yo1FG7AkykvVhBl0P3fl3u6PkIay8",
  authDomain: "e-commerce-clothing-a453d.firebaseapp.com",
  projectId: "e-commerce-clothing-a453d",
  storageBucket: "e-commerce-clothing-a453d.appspot.com",
  messagingSenderId: "375147427988",
  appId: "1:375147427988:web:471ee526c05a531e459c81",
};

const app = initializeApp(firebaseConfig);

// Select Account
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Authentication - Providers give us multiple ways to sign in
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Database - get and set data into the database
export const database = getFirestore();

// Create User: database, users collection(folder), uid
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  // creates user collection
  const userDocRef = doc(database, "users", userAuth.uid);

  //   retrieves the document data
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //   check if user data exists, if yes, return userDocRef
  // if data does not exist, create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // if does not exist, set this data to the user document
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// a permanently open listener
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
