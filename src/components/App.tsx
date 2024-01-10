import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import CocktailList from './CocktailList';
import Loading from './Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function getCocktails() {
      try {
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((drink: any) => {
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
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    getCocktails();
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <main>
        <Search />
        {loading ? <Loading /> : <CocktailList>{cocktails}</CocktailList>}
      </main>
    </>
  );
}
