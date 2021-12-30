import './skills.css';
import HTML from './HTML';
import Title from './Title';
import CSS from './CSS';
import JavaScript from './JavaScript';
import Java from './Java';
import Bootstrap from './Bootstrap';
import Git from './Git';
import Visual from './Visual';

const Skills = () => {
  return (
    <section id='skills'>
      <Title/>
      <div id='skillsContainer'>
        <HTML/>
        <CSS/>
        <JavaScript/>
        <Bootstrap/>
        <Java/>
        <Visual/>
        <Git/>
      </div>
    </section>
  )
}

export default Skills
