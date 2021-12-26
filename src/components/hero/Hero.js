import './hero.css';
import Role from './Role';
import Title from './Title';
import Button from './Button';

const Hero = () => {
  return (
    <section id='hero'>
      <div id="heroContainer">
        <Title/>
        <Role/>
        <Button/>
      </div>
    </section>
  )
}

export default Hero
