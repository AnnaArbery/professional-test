import {createSlice} from '@reduxjs/toolkit'

let initialUser = window.localStorage.getItem('user');
initialUser = initialUser
  ? JSON.parse(initialUser)
  : {
    name: '',
    year: '',
    email: '',
    sex: 'male',
    status: 'manager',
    date: +new Date(),
  };
let initialAnswers = window.localStorage.getItem('answers');
initialAnswers = initialAnswers
  ? JSON.parse(initialAnswers)
  : {};

const initialState = {
  user: initialUser,
  step: 1,
  auth: true,
  answers: initialAnswers,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      const date = +payload.date;
      state.user = { ...payload, date };
      state.auth = true;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    setStep(state, {payload}) {
      if (!state.auth) return;
      state.step = payload;
    },
    addAnswers(state, {payload: { id, module, val } }) {
      if (!state.answers[id]) state.answers[id] = {};
      if (!state.answers[id][module]) state.answers[id][module] = [];
      if (!state.answers[id][module].includes(val)) {
        state.answers[id][module].push(val);
      }
      localStorage.setItem('answers', JSON.stringify(state.answers));
    },
    removeAnswers(state, { payload: { id, module, val } }) {
      state.answers[id][module] = state.answers[id][module].filter((value) => value !== val);
      localStorage.setItem('answers', JSON.stringify(state.answers));
    },
  },
});

export const {
  setStep,
  setUser,
  addAnswers,
  removeAnswers,
} = userSlice.actions;
export default userSlice.reducer;
