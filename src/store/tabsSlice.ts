import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  tabs: [],
  titles: 0,
  status: null,
};

const fetchTabs = createAsyncThunk(
  'steps/fetchTabs',
  async () => {
    const res = await fetch(process.env.URL_TABS)
    const data = await res.json();
    return data;
  }
);

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTabs.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchTabs.fulfilled, (state, action) => {
        state.tabs = action.payload
        state.titles = action.payload.reduce((acc, {id, tab}) => {
          acc.push({id, tab})
          return acc;
        }, []);
        state.status = 'loaded';
      })
      .addCase(fetchTabs.rejected, (state) => {
        state.status = 'error'
      });
  }
})

export default tabsSlice.reducer;
export {fetchTabs};

