import { useAppDispatch } from '../store/store';
import { fetchCocktails } from '../actions/fetchCocktails';

let timeout: number;
const debounce = (func: Function, delay: number) => {
  clearTimeout(timeout);
  timeout = window.setTimeout(() => func(), delay);
};

export default function Search() {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    debounce(() => dispatch(fetchCocktails(newSearchTerm)), 300);
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
