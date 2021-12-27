import './about.css';
import Image from './Image';
import Text from './Text';
import Title from './Title';

const About = () => {
  return (
    <section id='about'>
      <div id='aboutContainer'>
        <Title/>
        <Image/>
        <Text/>
      </div>
    </section>
  )
}

export default About
