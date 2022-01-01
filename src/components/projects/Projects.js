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
        <Sportfolio/>
        <Valorant/>
        <Website/>
      </div>
    </section>
  )
}

export default Projects
