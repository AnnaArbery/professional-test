import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  describe: '',
  titles: [],
  employment: [],
  status: null
};

const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await fetch(process.env.URL_CONTENT)
    const data = await res.json();
    return data;
  }
);

const contentSlice = createSlice({
  name: 'content',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.describe = action.payload[0] || '';
        state.titles = action.payload[1] || [];
        state.employment = action.payload[2] || [];
        state.status = 'loaded';
      })
      .addCase(fetchContent.rejected, (state) => {
        state.status = 'error'
      });
  }
})

export default contentSlice.reducer;
export {fetchContent};

