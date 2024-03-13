import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
        </ul>
      </div>
    </nav>
  );
}
