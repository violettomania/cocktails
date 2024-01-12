import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CocktailDetail from '../components/CocktailDetail';
import Loading from '../components/Loading';
import NoCocktailError from '../components/NoCocktailError';
import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchCocktail, setSearchTerm } from '../actions/fetchCocktails';
import { RootState } from '../store/store';

export default function CocktailDetailPage() {
  const dispatch = useAppDispatch();
  const cocktail = useAppSelector(
    (state: RootState) => state.searchSingle.cocktail
  );
  const loading = useAppSelector(
    (state: RootState) => state.searchSingle.loading
  );

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(setSearchTerm(id));
      dispatch(fetchCocktail(id));
    }
  }, [dispatch, id]);

  const renderCocktail = () => {
    if (cocktail && cocktail.name) {
      return loading ? <Loading /> : <CocktailDetail {...cocktail} />;
    }
    return <NoCocktailError />;
  };

  return renderCocktail();
}
