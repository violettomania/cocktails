import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CocktailDetail from '../pages/CocktailDetail';
import About from '../pages/About';
import Error from '../pages/Error';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Home />} />
        <Route path='cocktail/:id' element={<CocktailDetail />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}
