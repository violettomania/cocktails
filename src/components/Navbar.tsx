import { Link } from 'react-router-dom';

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
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
        </ul>
      </div>
    </nav>
  );
}
