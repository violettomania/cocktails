import { useEffect } from 'react';
import Search from '../components/Search';
import CocktailList from '../components/CocktailList';
import Loading from '../components/Loading';
import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchCocktails } from '../actions/fetchCocktails';
import { RootState } from '../store/store';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(
    (state: RootState) => state.search.searchTerm
  );
  const cocktails = useAppSelector(
    (state: RootState) => state.search.cocktails
  );
  const loading = useAppSelector((state: RootState) => state.search.loading);

  useEffect(() => {
    dispatch(fetchCocktails(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <>
      <main>
        <Search />
        {loading ? <Loading /> : <CocktailList drinks={cocktails || []} />}
      </main>
    </>
  );
}
