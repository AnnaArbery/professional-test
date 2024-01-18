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

const localSelected = JSON.parse(window.localStorage.getItem('selected')) || {};
const keysLocalSelected = Object.keys(localSelected)
const initialNeeds = {};
const initialEmloyment = [0,0,0,0];

if (keysLocalSelected.length > 0) {
  keysLocalSelected.forEach(value => {
    const [col, row] = value;

    if (!initialEmloyment[col]) initialEmloyment[col] = 0;
    initialEmloyment[col] +=  localSelected[value];

    if (!initialNeeds[row]) initialNeeds[row] = 0;
    initialNeeds[row] += localSelected[value];
  })
}

const initialEmploymentTitle = JSON.parse(window.localStorage.getItem('employmentTitle')) || [];

const initialState = {
  user: initialUser,
  step: 0,
  auth: false,
  answers: initialAnswers,
  needs: initialNeeds,
  employment: initialEmloyment,
  employmentTitle: initialEmploymentTitle,
  selected: localSelected
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
    setNeeds(state, {payload: {title, value, id, count}} ) {
      state.needs[title] = value;
      state.selected[`${id[0]}${id[1]}`] = count;
      localStorage.setItem('selected', JSON.stringify(state.selected));
    },
    setEmpoyment(state, {payload}) {
      state.employment = [...payload]
    },
    setEmploymentTitle(state, {payload:{id, title}}) {
      state.employmentTitle[id] = title;
      localStorage.setItem('employmentTitle', JSON.stringify(state.employmentTitle));
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