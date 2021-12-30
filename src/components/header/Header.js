import './header.css';
import Title from './Title';
import Nav from './Nav';
import Hamburger from './Hamburger';

const Header = ({ onToggle, active }) => {
  return (
    <header id='header'>
      <Title/>
      <Nav active={active}/>
      <Hamburger onToggle={onToggle} active={active}/>
    </header>
  )
}

export default Header
