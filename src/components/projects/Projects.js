import './projects.css';
import Sportfolio from './Sportfolio';
import Title from './Title';

const Projects = () => {
  return (
    <section id='projects'>
      <Title/>
      <div id='projectsContainer'>
        <Sportfolio/>
        <Sportfolio/>
        <Sportfolio/>
      </div>
    </section>
  )
}

export default Projects
