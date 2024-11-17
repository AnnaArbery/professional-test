import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import IStep from '@/types/IStep';

type StepState = {
  steps: IStep[],
  count: number,
  status: string
}

const initialState: StepState = {
  steps: [],
  count: 0,
  status: null,
};

const fetchSteps = createAsyncThunk<IStep[]>(
  'steps/fetchSteps',
  async () => {
    const res = await fetch(process.env.URL_STEPS)
    const data = await res.json();
    return data as IStep[];
  }
);

const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSteps.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchSteps.fulfilled, (state, action: PayloadAction<IStep[]>) => {
        state.steps = action.payload
        state.count = action.payload.length;
        state.status = 'loaded';
      })
      .addCase(fetchSteps.rejected, (state) => {
        state.status = 'error'
      });
  }
})

export default stepsSlice.reducer;
export {fetchSteps};

