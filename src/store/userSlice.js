import {createSlice} from '@reduxjs/toolkit'

const defalutState = {
  user: {
    name: '',
    year: '',
    email: '',
    sex: 'male',
    status: 'manager',
    date: +new Date(),
  },
  step: 0,
  auth: false,
  answers: {},
  needs: 0,
  employment: 0,
  employmentTitle: [],
  selected: {}
}

let localUser = window.localStorage.getItem('user') ;
if (localUser) {
  localUser = JSON.parse(localUser)
}

let localAnswers = window.localStorage.getItem('answers');
if (localAnswers) {
  localAnswers = JSON.parse(localAnswers)
}

let localSelected = window.localStorage.getItem('selected');
if (localSelected) {
  localSelected = JSON.parse(localSelected)
}
const keysLocalSelected = Object.keys(localSelected)
const initialNeeds = {};
const initialEmloyment = [0, 0, 0, 0];

if (keysLocalSelected.length > 0) {
  keysLocalSelected.forEach(value => {
    const [col, row] = value;

    if (!initialEmloyment[col]) initialEmloyment[col] = 0;
    initialEmloyment[col] +=  localSelected[value];

    if (!initialNeeds[row]) initialNeeds[row] = 0;
    initialNeeds[row] += localSelected[value];
  })
}

const defaultEmploymentTitle = [];
let localEmploymentTitle = window.localStorage.getItem('employmentTitle');
if (localEmploymentTitle) {
  localEmploymentTitle = JSON.parse(localEmploymentTitle);
}

const localState = {
  user: localUser || defalutUser,
  step: 0,
  auth: false,
  answers: localAnswers || defaultAnswers,
  needs: initialNeeds,
  employment: initialEmloyment,
  employmentTitle: localEmploymentTitle || defaultEmploymentTitle,
  selected: localSelected
};

const userSlice = createSlice({
  name: 'user',
  initialState : {
    ...defalutState,
    ...localState
  },
  reducers: {
    setUser(state, { payload }) {
      state.user = { ...payload };
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
    clear(state) {
      return defalutState;
    }
  },
});

export const {
  setStep,
  setUser,
  addAnswers,
  removeAnswers,
  setNeeds,
  setEmpoyment,
  setEmploymentTitle,
  clear
} = userSlice.actions;
export default userSlice.reducer;