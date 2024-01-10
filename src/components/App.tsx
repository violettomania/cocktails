export default function App() {
  return (
    <>
      <nav className='navbar'>
        <div className='nav-center'>
          <a href='/'>
            <img
              src='/logo.5bb3b58efe44c44cee437fa462266c08.svg'
              alt='cocktail db logo'
              className='logo'
            />
          </a>
          <ul className='nav-links'>
            <li>
              <a href='/'>home</a>
            </li>
            <li>
              <a href='/about'>about</a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className='section search'>
          <form className='search-form'>
            <div className='form-control'>
              <label htmlFor='name'>search your favorite cocktail</label>
              <input type='text' name='name' id='name' />
            </div>
          </form>
        </section>
        <section className='section'>
          <h2 className='section-title'>cocktails</h2>
          <div className='cocktails-center'>
            <article className='cocktail'>
              <div className='img-container'>
                <img
                  src='https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg'
                  alt='A1'
                />
              </div>
              <div className='cocktail-footer'>
                <h3>A1</h3>
                <h4>Cocktail glass</h4>
                <p>Alcoholic</p>
                <a
                  className='btn btn-primary btn-details'
                  href='/cocktail/17222'
                >
                  details
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
