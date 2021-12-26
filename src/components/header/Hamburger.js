import { FaBars } from 'react-icons/fa';

const Hamburger = ({ onToggle }) => {

  return (
    <>
    <FaBars id='toggleButton' onClick={onToggle}/>
    </>
  )
}

export default Hamburger
