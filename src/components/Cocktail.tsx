export default function Cocktail({ name, image, info, glass }: Drink) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <a className='btn btn-primary btn-details' href='/cocktail/17222'>
          details
        </a>
      </div>
    </article>
  );
}
