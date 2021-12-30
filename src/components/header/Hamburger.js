import { FaBars } from 'react-icons/fa';

const Hamburger = ({ onToggle, active }) => {

  return (
    <>
    <FaBars id={`toggleButton${active ? 'Active' : ''}`} onClick={onToggle} />
    </>
  )
}

export default Hamburger
