import './about.css';
import Image from './Image';
import Info from './Info';
import Title from './Title';

const About = () => {
  return (
    <section id='about'>
      <div id='aboutContainer'>
        <Title/>
        <Image/>
        <Info/>
      </div>
    </section>
  )
}

export default About
