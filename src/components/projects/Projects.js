import './projects.css';
import Sportfolio from './Sportfolio';
import Title from './Title';
import Valorant from './Valorant';
import Website from './Website';

const Projects = () => {
  return (
    <section id='projects'>
      <Title/>
      <div id='projectsContainer'>
        <Website/>
        <Valorant/>
        <Sportfolio/>
      </div>
    </section>
  )
}

export default Projects
