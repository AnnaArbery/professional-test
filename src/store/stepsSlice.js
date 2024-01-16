import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  steps: [],
  count: 0,
  status: null,
};

const fetchSteps = createAsyncThunk(
  'steps/fetchSteps',
  async () => {
    const res = await fetch(process.env.URL_STEPS)
    const data = await res.json();
    return data;
  }
);

const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSteps.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchSteps.fulfilled, (state, action) => {
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

