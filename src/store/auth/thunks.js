import {
  loginWithEmailAndPassword,
  logoutFirebase,
  registerWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingNewUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, errorMessage, uid, photoURL } = await registerWithEmailPassword(
      { displayName, email, password }
    );

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, photoURL, email, displayName }));
  };
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    // const {ok, errorMessage, uid, photoURL} = await registerWithEmailPassword({displayName, email, password});

    const { ok, errorMessage, uid, photoURL, displayName } =
      await loginWithEmailAndPassword({ email, password });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, photoURL, email, displayName }));
  };
};

export const startLogoutFirebase = () => {
  return async (dispatch) => {
    await logoutFirebase()
    dispatch(logout({errorMessage:''}));
  };
};
