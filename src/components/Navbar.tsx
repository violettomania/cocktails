export default function Navbar() {
  return (
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
  );
}
