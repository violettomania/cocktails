import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setSearchTerm = createAction<string>('cocktails/setSearchTerm');

const cocktailsUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// TODO separate action for single search
export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async (searchTerm: string) => {
    const response = await fetch(`${cocktailsUrl}${searchTerm}`);
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

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const fetchCocktail = createAsyncThunk(
  'cocktails/fetchCocktails',
  async (searchTerm: string) => {
    const response = await fetch(`${cocktailUrl}${searchTerm}`);
    const data = await response.json();
    const { drinks } = data;
    const drink = drinks[0];
    if (drinks) {
      const ingredients = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
      ];
      return {
        name: drink.strDrink || '',
        image: drink.strDrinkThumb || '',
        info: drink.strAlcoholic || '',
        glass: drink.strGlass || '',
        category: drink.strCategory || '',
        instructions: drink.strInstructions || '',
        ingredients: ingredients || [],
      };
    }
  }
);
