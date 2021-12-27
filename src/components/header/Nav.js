const Nav = ({ active }) => {
  return (
    <nav id={`nav${active ? 'Active' : ''}`}>
      <ul> 
        <li>Home</li>
        <li>Projects</li>
        <li>Contacts</li>
        <li>About</li>
        <li>Another</li>
      </ul>
    </nav>
  )
}

export default Nav
