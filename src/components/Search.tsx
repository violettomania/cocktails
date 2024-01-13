import { useAppDispatch } from '../store/store';
import { fetchCocktails } from '../actions/fetchCocktails';

export default function Search() {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    dispatch(fetchCocktails(newSearchTerm));
  };

  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input type='text' name='name' id='name' onChange={handleChange} />
        </div>
      </form>
    </section>
  );
}
