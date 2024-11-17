import { ref, set } from 'firebase/database';
import { db } from './firebaseConfig';
import { IUserState } from '../types/IUser';

export const addData = (id: number, data: IUserState & { create: number }) =>
  set(ref(db, `users/${id}`), data);
