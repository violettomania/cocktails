import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async (searchTerm: string) => {
    const response = await fetch(`${url}${searchTerm}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks) {
      return drinks.map((drink: any) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          drink;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
    } else {
      return [];
    }
  }
);
