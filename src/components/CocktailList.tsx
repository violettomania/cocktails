import Cocktail from './Cocktail';

export default function CocktailList() {
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        <Cocktail />
      </div>
    </section>
  );
}
