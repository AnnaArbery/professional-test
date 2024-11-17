import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'

type ContentState = {
  describe: string,
  titles: string[],
  employment: string[],
  status: string
}
type ContentResponse = [
  string,
  string[],
  string[]
]

const initialState: ContentState = {
  describe: '',
  titles: [],
  employment: [],
  status: null
};

const fetchContent = createAsyncThunk<ContentResponse>(
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchContent.fulfilled, (state, action: PayloadAction<ContentResponse> ) => {
        const [descrbe = '', titles = [], employment = []] = action.payload;

        state.describe = descrbe;
        state.titles = titles;
        state.employment = employment;

        state.status = 'loaded';
      })
      .addCase(fetchContent.rejected, (state) => {
        state.status = 'error'
      });
  }
})

export default contentSlice.reducer;
export {fetchContent};

