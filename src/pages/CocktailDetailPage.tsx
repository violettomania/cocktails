import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CocktailDetail from '../components/CocktailDetail';
import Loading from '../components/Loading';

export default function CocktailDetailPage() {
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState<DrinkDetails>({
    name: '',
    image: '',
    info: '',
    glass: '',
    category: '',
    instructions: '',
    ingredients: [],
  });
  let { id } = useParams();

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  useEffect(() => {
    async function getCocktail() {
      setLoading(true);
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;
        const drink = drinks[0];
        if (drink) {
          const ingredients = [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
          ];
          setCocktail({
            name: drink.strDrink || '',
            image: drink.strDrinkThumb || '',
            info: drink.strAlcoholic || '',
            glass: drink.strGlass || '',
            category: drink.strCategory || '',
            instructions: drink.strInstructions || '',
            ingredients: ingredients || [],
          });
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  return <>{loading ? <Loading /> : <CocktailDetail {...cocktail} />}</>;
}
