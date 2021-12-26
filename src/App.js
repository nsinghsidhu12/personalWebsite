import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <Header onToggle={onToggle} active={toggle}/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
