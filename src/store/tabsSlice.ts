import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import ITab from '@/types/ITab';

type Titles = {
  id: number,
  tab: string
}
type TabState = {
  tabs: ITab[],
  titles: Titles[],
  status: string
}

const initialState: TabState = {
  tabs: [],
  titles: [],
  status: null,
};

const fetchTabs = createAsyncThunk<ITab[]>(
  'steps/fetchTabs',
  async () => {
    const res = await fetch(process.env.URL_TABS)
    const data = await res.json();
    return data as ITab[];
  }
);

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTabs.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchTabs.fulfilled, (state, action: PayloadAction<ITab[]>) => {
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

