import { ref, set } from 'firebase/database';
import { db } from './firebaseConfig';

export const addData = (id, data) => set(ref(db, `users/${id}`), data);