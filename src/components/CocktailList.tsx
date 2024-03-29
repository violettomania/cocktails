import Cocktail from './Cocktail';
import NoCocktailError from './NoCocktailError';

interface CocktailListProps {
  drinks: Drink[];
}

export default function CocktailList({ drinks }: CocktailListProps) {
  return (
    <section className='section'>
      {drinks.length === 0 ? (
        <NoCocktailError />
      ) : (
        <>
          <h2 className='section-title'>cocktails</h2>
          <div className='cocktails-center'>
            {drinks.map((drink) => (
              <Cocktail key={drink.id} {...drink} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
