import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CocktailDetailPage from '../pages/CocktailDetailPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='cocktail/:id' element={<CocktailDetailPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}
