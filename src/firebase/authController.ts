import {
  signInAnonymously,
  signOut,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

export const loginAnonymously = () => {
  try {
    const response = signInAnonymously(auth);
    return response;
  } catch (err) {
    return err;
  }
};

export const logout = () => {
  try {
    signOut(auth);
  } catch (err) {
    return err;
  }
};