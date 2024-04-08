import { ref, set, get, child } from 'firebase/database';
import { auth, db } from './firebaseConfig';

export const addData = (id, data) => {
  set(ref(db, `users/${id}`), data);
}

export const getData = (id = '') => {
  get(child(ref(db), `users/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      
      console.error(error);
    });
}