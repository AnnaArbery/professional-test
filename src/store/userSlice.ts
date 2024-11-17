import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAnswer,
  IEmploymentTitle,
  INeeds,
  IUserState,
  IUser,
  EmploymentTitleLocal,
  AnswersLocal,
  NeedsLocal,
  SelectedLocal,
} from '../types/IUser';

const defalutState: IUserState = {
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
  needs: {},
  employment: [],
  employmentTitle: {},
  selected: {},
};

let localUserStorage = window.localStorage.getItem('user');
let localUser: IUser;
if (localUserStorage) {
  localUser = JSON.parse(localUserStorage);
}

let localAnswersStorage = window.localStorage.getItem('answers');
let localAnswers: AnswersLocal;
if (localAnswersStorage) {
  localAnswers = JSON.parse(localAnswersStorage);
}

let localSelectedStorage = window.localStorage.getItem('selected');
let localSelected: SelectedLocal;
if (localSelectedStorage) {
  localSelected = JSON.parse(localSelectedStorage);
}

const keysLocalSelected: string[] = Object.keys(localSelected || []);
const initialNeeds: NeedsLocal = {};
const initialEmloyment: number[] = [0, 0, 0, 0];

if (Object.keys(keysLocalSelected).length > 0) {
  keysLocalSelected.forEach(value => {
    const [col, row] = value;

    if (!initialEmloyment[Number(col)]) initialEmloyment[Number(col)] = 0;
    initialEmloyment[Number(col)] += localSelected[Number(value)];

    if (!initialNeeds[row]) initialNeeds[row] = 0;
    initialNeeds[row] += localSelected[Number(value)];
  });
}

let localEmploymentTitleStorage = window.localStorage.getItem('employmentTitle');
let localEmploymentTitle: EmploymentTitleLocal;
if (localEmploymentTitleStorage) {
  localEmploymentTitle = JSON.parse(localEmploymentTitleStorage);
}

const localState: Omit<IUserState, 'step' | 'auth'> = {
  user: localUser || { ...defalutState.user },
  answers: localAnswers || { ...defalutState.answers },
  needs: initialNeeds || { ...defalutState.needs },
  employment: initialEmloyment || { ...defalutState.employment },
  employmentTitle: localEmploymentTitle || { ...defalutState.employmentTitle },
  selected: localSelected || { ...defalutState.selected },
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    ...defalutState,
    ...localState,
  },
  reducers: {
    setUser(state, action) {
      const { payload } = action;
      state.user = { ...payload };
      state.auth = true;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    setStep(state, action) {
      const { payload } = action;
      if (!state.auth) return;
      state.step = payload;
    },
    addAnswers(state, action: PayloadAction<IAnswer>) {
      const { id, module, val } = action.payload;
      if (!state.answers[id]) state.answers[id] = {};
      if (!state.answers[id][module]) state.answers[id][module] = [];
      if (!state.answers[id][module].includes(val)) {
        state.answers[id][module].push(val);
      }
      localStorage.setItem('answers', JSON.stringify(state.answers));
    },
    setNeeds(state, action: PayloadAction<INeeds>) {
      const { id, title, value, count } = action.payload;
      state.needs[title] = value;
      state.selected[`${id[0]}${id[1]}`] = count;
      localStorage.setItem('selected', JSON.stringify(state.selected));
    },
    setEmpoyment(state, action) {
      const { payload } = action;
      state.employment = [...payload];
    },
    setEmploymentTitle(state, action: PayloadAction<IEmploymentTitle>) {
      const { id, title } = action.payload;
      state.employmentTitle[id] = title;
      localStorage.setItem('employmentTitle', JSON.stringify(state.employmentTitle));
    },
    removeAnswers(state, action: PayloadAction<IAnswer>) {
      const { id, module, val } = action.payload;
      state.answers[id][module] = state.answers[id][module].filter(value => value !== val);
      if (state.answers[id][module].length === 0) {
        delete state.answers[id][module];
      }
      if (Object.keys(state.answers[id]).length === 0) {
        delete state.answers[id];
      }
      localStorage.setItem('answers', JSON.stringify(state.answers));
    },
    clear() {
      localStorage.removeItem('user');
      localStorage.removeItem('answers');
      localStorage.removeItem('selected');
      localStorage.removeItem('employmentTitle');

      return defalutState;
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
  setEmploymentTitle,
  clear,
} = userSlice.actions;

export default userSlice.reducer;
export const userActions = userSlice.actions;
