import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { fetchCocktail, setSearchTerm } from '../actions/fetchCocktails';

interface SearchSingleState {
  searchTerm: string;
  loading: boolean;
  cocktail?: DrinkDetails;
  error?: string;
}

const initialState: SearchSingleState = {
  searchTerm: '',
  loading: false,
  error: '',
};

export const searchSingleSlice = createSlice({
  name: 'singleSearch',
  initialState,
  reducers: {
    searchSingle: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSearchTerm, (state, action: PayloadAction<string>) => {
        state.searchTerm = action.payload;
      })
      .addCase(fetchCocktail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktail.fulfilled, (state, action) => {
        state.cocktail = action.payload;
        state.loading = false;
      })
      .addCase(fetchCocktail.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { searchSingle } = searchSingleSlice.actions;

export const selectSingleSearch = (state: RootState) => state.search.searchTerm;

export default searchSingleSlice.reducer;
