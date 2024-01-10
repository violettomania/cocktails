import Cocktail from './Cocktail';

interface CocktailListProps {
  children: Drink[];
}

export default function CocktailList({ children }: CocktailListProps) {
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {children.map((cocktail) => (
          <Cocktail key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </section>
  );
}
