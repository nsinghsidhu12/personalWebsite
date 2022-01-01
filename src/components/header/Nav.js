const Nav = ({ active }) => {
  return (
    <nav id={`nav${active ? 'Active' : ''}`}>
      <ul> 
        <a href='#hero'><li>Home</li></a>
        <a href='#about'><li>About</li></a>
        <a href='#skills'><li>Skills</li></a>
        <a href='#projects'><li>Projects</li></a>
        <a href='#contact'><li>Contact</li></a>
      </ul>
    </nav>
  )
}

export default Nav
