import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: 'a',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.searchTerm;

export default searchSlice.reducer;
