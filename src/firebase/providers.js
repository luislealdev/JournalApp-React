import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { uid, displayName, email, photoURL } = result.user;

    return {
      ok: true,
      //User info
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (err) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    return { ok: false, errorCode, errorMessage };
  }
};

export const registerWithEmailPassword = async ({displayName, email, password}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    await updateProfile(firebaseAuth.currentUser, {displayName});

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
      email,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWithEmailAndPassword = async ({email, password}) => {
  try {
    const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const {uid,
      photoURL,
      displayName} = resp.user;

      return {
        ok: true,
        uid,
        photoURL,
        displayName,
        email,
      };
    
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
}