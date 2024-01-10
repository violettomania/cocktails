import { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import CocktailList from './CocktailList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  return (
    <>
      <Navbar />
      <main>
        <Search />
        <CocktailList />
      </main>
    </>
  );
}
