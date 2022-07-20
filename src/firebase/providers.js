import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
