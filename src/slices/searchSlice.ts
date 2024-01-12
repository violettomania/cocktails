import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { fetchCocktails, setSearchTerm } from '../actions/fetchCocktails';

interface SearchState {
  searchTerm: string;
  loading: boolean;
  cocktails?: Drink[];
  error?: string;
}

const initialState: SearchState = {
  searchTerm: 'a',
  loading: false,
  cocktails: [],
  error: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSearchTerm, (state, action: PayloadAction<string>) => {
        state.searchTerm = action.payload;
      })
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.cocktails = action.payload;
        state.loading = false;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { search } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.searchTerm;

export default searchSlice.reducer;
