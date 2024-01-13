export default function CocktailDetail({
  name,
  image,
  info,
  glass,
  category,
  instructions,
  ingredients,
}: DrinkDetails) {
  return (
    <section className='section cocktail-section'>
      <a className='btn btn-primary' href='/'>
        back home
      </a>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span> {name}
          </p>
          <p>
            <span className='drink-data'>category :</span> {category}
          </p>
          <p>
            <span className='drink-data'>info :</span> {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span> {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((ingredient, idx) => (
              <span key={idx}>{ingredient}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
