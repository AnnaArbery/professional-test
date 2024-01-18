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
  step: 6,
  auth: true,
  answers: initialAnswers,
  needs: {},
  employment: [],
  employmentTitle: [],
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
    setNeeds(state, {payload: {title, value}} ) {
      state.needs[title] = value;
    },
    setEmpoyment(state, {payload}) {
      state.employment = [...payload]
    },
    setEmploymentTitle(state, {payload:{id, title}}) {
      state.employmentTitle[id] = title
    },
    removeAnswers(state, { payload: { id, module, val } }) {
      state.answers[id][module] = state.answers[id][module].filter((value) => value !== val);
      if (state.answers[id][module].length === 0) {
        delete state.answers[id][module];
      }
      if (Object.keys(state.answers[id]).length === 0) {
        delete state.answers[id];
      }
      localStorage.setItem('answers', JSON.stringify(state.answers));
    },
  },
});

export const {
  setStep,
  setUser,
  addAnswers,
  removeAnswers,
  setNeeds,
  setEmpoyment,
  setEmploymentTitle
} = userSlice.actions;
export default userSlice.reducer;
